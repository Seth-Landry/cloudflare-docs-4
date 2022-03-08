const productIconKey = "fundamentals";

module.exports = {
  product: "Cloudflare Fundamentals",
  pathPrefix: "/fundamentals",
  productIconKey,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/fundamentals",
  logoSVGContent: '<svg width="48" height="48" viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg"><path d="M42 10.4999H37.5V7.49992L35.475 6.09741L24 10.3949L12.525 6.09741L10.5 7.49992V10.4999H6L4.5 11.9999V42L6 43.5H42L43.5 42V11.9999L42 10.4999ZM25.5 13.0424L34.5 9.66742V35.0625L25.5 39.5625V13.0424ZM13.5 9.66742L22.5 13.0424V39.54L13.5 35.04V9.66742ZM7.5 13.4999H10.5V36L11.3325 37.3425L17.61 40.5H7.5V13.4999ZM40.5 40.5H30.39L36.6675 37.3725L37.5 36V13.4999H40.5V40.5Z" /></svg>',
  externalLinks: [
    {
      title: "How Cloudflare works",
      url: "https://developers.cloudflare.com/fundamentals/get-started/how-cloudflare-works"
    },
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com",
    },
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { facetFilters: '["project:fundamentals"]' },
  },
  siteMetadata: {
    title: "Cloudflare Fundamentals docs",
    description: "Cloudflare Fundamentals provides information about features that span Cloudflare products.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/fundamentals",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};