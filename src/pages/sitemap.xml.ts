import type { APIRoute } from 'astro';
import { COMPANY_INFO, SERVICES_DATA } from '../data/seoData';

export const GET: APIRoute = () => {
  const baseUrl = COMPANY_INFO.siteUrl;
  const lastMod = new Date().toISOString().split('T')[0];

  const staticPages = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/sobre-nos', priority: '0.8', changefreq: 'monthly' },
    { path: '/contato', priority: '0.8', changefreq: 'monthly' },
    { path: '/politica-de-privacidade', priority: '0.5', changefreq: 'yearly' },
  ];

  const servicePages = SERVICES_DATA.map((s) => ({
    path: `/servicos/${s.slug}`,
    priority: '0.9',
    changefreq: 'weekly',
  }));

  const allUrls = [...staticPages, ...servicePages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (u) => `  <url>
    <loc>${baseUrl}${u.path}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
