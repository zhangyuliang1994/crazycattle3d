// @ts-check

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://crazy-cattle.net',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'monthly';

    if (path === '') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/privacy-policy' || path === '/terms-of-service') {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    }
  },
}
