import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const outputDirectory = 'dist';
const baseHtml = await readFile(join(outputDirectory, 'index.html'), 'utf8');
const pageMetadata = JSON.parse(await readFile('src/config/preschool/pageSeo.json', 'utf8'));
const pages = Object.values(pageMetadata);

const escapeAttribute = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const replaceTag = (html, pattern, replacement) => {
  if (!pattern.test(html)) {
    throw new Error(`Expected SEO tag was not found: ${pattern}`);
  }
  return html.replace(pattern, replacement);
};

for (const page of pages) {
  const canonical = `https://littlewingscareplayschool.com${page.path}`;
  const title = escapeAttribute(page.title);
  const description = escapeAttribute(page.description);
  let html = baseHtml;

  html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`);
  html = replaceTag(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`);
  html = replaceTag(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`);
  html = replaceTag(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`);
  html = replaceTag(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`);
  html = replaceTag(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`);
  html = replaceTag(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`);
  html = replaceTag(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`);
  html = replaceTag(
    html,
    /<noscript>[\s\S]*?<\/noscript>/,
    `<noscript><main><h1>${page.heading}</h1><p>${description}</p><nav aria-label="School information"><a href="/admissions/">Admissions</a><a href="/programs/">Our Programmes</a><a href="/about/">About Our School</a><a href="/why-us/">Why Us</a><a href="/contact/">Contact Us</a><a href="/gallery/">Gallery</a></nav></main></noscript>`,
  );

  const destination = join(outputDirectory, page.path, 'index.html');
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html);
}
