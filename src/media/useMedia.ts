import { mediaConfig } from './mediaConfig';
import { MediaProvider } from './mediaProvider';
import { demoMediaProvider } from './demoMediaProvider';
import { googleDriveMediaProvider } from './googleDriveMediaProvider';

export function getMediaProvider(): MediaProvider {
  if (mediaConfig.provider === 'google-drive') {
    return googleDriveMediaProvider;
  }
  return demoMediaProvider;
}

export const activeMediaProvider = getMediaProvider();
