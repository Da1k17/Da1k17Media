/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Da1k17's Media`,
    description: `Daikiの総合メディアです`,
    lang: `ja`,
    siteUrl: `https://da1k17media.netlify.app`,
    locale: `jp_JP`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Da1k17's Media`,
        short_name: `Da1k17`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00E6D6`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
