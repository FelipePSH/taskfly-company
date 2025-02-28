/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://taskfly.com.au", // Troque pelo seu domínio real
    generateRobotsTxt: true, // Cria automaticamente o robots.txt
    sitemapSize: 5000, // Máximo de URLs por sitemap (padrão 5000)
    generateIndexSitemap: false, // Se não precisar de múltiplos sitemaps
  };