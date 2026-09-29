// ─────────────────────────────────────────────────────────────────────────────
// useFacebookSDK — Idempotent Facebook JavaScript SDK loader
//
// • Loads the SDK script exactly once per page session, even if multiple
//   components call this hook (module-level singleton flag).
// • Returns { sdkReady, error } reactive state.
// • No access token, no Graph API, 100% browser-side.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    FB: {
      init: (opts: {
        appId: string;
        xfbml: boolean;
        version: string;
      }) => void;
      XFBML: {
        parse: (node?: Element | null) => void;
      };
    };
    fbAsyncInit?: () => void;
  }
}

// Module-level singleton state — shared across all hook consumers.
type SdkState = 'idle' | 'loading' | 'ready' | 'error';
let _sdkState: SdkState = 'idle';
const _listeners: Array<(state: SdkState) => void> = [];

function notifyListeners(state: SdkState) {
  _sdkState = state;
  _listeners.forEach((fn) => fn(state));
}

function loadSdk(): void {
  if (_sdkState !== 'idle') return; // already loading or loaded
  _sdkState = 'loading';

  // Facebook requires window.fbAsyncInit to be defined before the script loads.
  window.fbAsyncInit = () => {
    try {
      window.FB.init({
        appId: '',          // No App ID needed for the public Page Plugin
        xfbml: true,        // Parse XFBML on init
        version: 'v19.0',
      });
      notifyListeners('ready');
    } catch {
      notifyListeners('error');
    }
  };

  // Inject the SDK script once — guard against duplicate injection.
  if (!document.getElementById('facebook-jssdk')) {
    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.onerror = () => notifyListeners('error');

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript?.parentNode?.insertBefore(script, firstScript);
  }
}

/**
 * Reusable hook that loads the Facebook JS SDK exactly once.
 *
 * @returns sdkReady  — true when FB.XFBML.parse() is safe to call
 * @returns error     — true when SDK failed to load (network error, ad-blocker, etc.)
 */
export function useFacebookSDK(): { sdkReady: boolean; error: boolean } {
  const [sdkState, setSdkState] = useState<SdkState>(_sdkState);

  useEffect(() => {
    // If already resolved, no-op.
    if (_sdkState === 'ready' || _sdkState === 'error') {
      setSdkState(_sdkState);
      return;
    }

    // Subscribe to state changes.
    const listener = (state: SdkState) => setSdkState(state);
    _listeners.push(listener);

    // Kick off load if this is the first consumer.
    loadSdk();

    return () => {
      const idx = _listeners.indexOf(listener);
      if (idx !== -1) _listeners.splice(idx, 1);
    };
  }, []);

  return {
    sdkReady: sdkState === 'ready',
    error: sdkState === 'error',
  };
}
