
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://aircoinstallatiegeleen.nl",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
        ],
      },
    ],
    additionalSitemaps: [
      "https://aircoinstallatiegeleen.nl/sitemap-locations.xml",
      "https://aircoinstallatiegeleen.nl/sitemap-services.xml",
      "https://aircoinstallatiegeleen.nl/sitemap-products.xml",
    ],
  },
  exclude: ['/404', '/500', '/offline'],
  generateIndexSitemap: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
}
