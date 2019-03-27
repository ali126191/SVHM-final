module.exports = {
  pathPrefix: `/SVHM-final`,
  siteMetadata: {
    title: 'Shri Vitthal Hindu Mandir - Mississauga Hindu Temple &amp; Community Center',
    siteUrl: `https://ali126191.github.io`,

  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-breadcrumb`,
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/SVHM-final/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/img/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
}