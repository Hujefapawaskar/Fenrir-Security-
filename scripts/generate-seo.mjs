import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const rawSiteUrl = process.env.VITE_SITE_URL || 'https://fenrirsec.netlify.app';
const siteUrl = rawSiteUrl.replace(/\/$/, '');
const today = new Date().toISOString().slice(0, 10);

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;

const routes = [
  '/',
  '/login',
  '/dashboard',
  '/scans',
];

const priorities = {
  '/': '1.0',
  '/login': '0.8',
  '/dashboard': '0.9',
  '/scans': '0.9',
};

const frequencies = {
  '/': 'weekly',
  '/login': 'weekly',
  '/dashboard': 'daily',
  '/scans': 'daily',
};

const urlEntries = routes
  .map((route) => {
    return `  <url>\n    <loc>${siteUrl}${route}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${frequencies[route]}</changefreq>\n    <priority>${priorities[route]}</priority>\n  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

writeFileSync(resolve('public', 'robots.txt'), robots, 'utf8');
writeFileSync(resolve('public', 'sitemap.xml'), sitemap, 'utf8');

console.log(`SEO files generated for ${siteUrl}`);
