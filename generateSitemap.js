const fs = require('fs');
const Sitemap = require('sitemap');

const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/products', changefreq: 'weekly', priority: 0.7 },
  { url: '/contact', changefreq: 'weekly', priority: 0.7 },
  // Add more URLs as needed
];

const sitemap = Sitemap.createSitemap({
  hostname: 'http://localhost:3000', // Change to your local development URL
  urls,
});

fs.writeFileSync('./public/sitemap.xml', sitemap.toString());
