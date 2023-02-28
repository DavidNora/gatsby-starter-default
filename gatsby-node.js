/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage ,createRedirect} = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  createRedirect({
    fromPath: "/using-typescript",
    toPath: `/teste2`,
    statusCode: 200,
    proxyHeaders: {
      "x-forwarded-host": `https://mercado.carrefour.com.br/`,
      via: "''",
    },
  })

  createRedirect({
    fromPath: "/sitemap",
    toPath: `https://carrefourbrfood.myvtex.com/sitemap.xml`,
    statusCode: 200,
    proxyHeaders: {
      "x-forwarded-host": `https://mercado.carrefour.com.br/`,
      via: "''",
    },
  })
}
