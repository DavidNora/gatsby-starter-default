/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions
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

  createRedirect({
    fromPath: `/sitemap2.xml`,
    toPath: `https://mercado.carrefour.vtexcommercestable.com.br/sitemap.xml`,
    conditions: {
      "x-forwarded-host":
        "https://mercado.carrefour.com.br (https://mercado.carrefour.com.br/)",
    },
  })

  createRedirect({
    fromPath: `/sitemap3.xml`,
    toPath: `https://carrefourbrfood.myvtex.com/sitemap.xml`,
    conditions: {
      "x-forwarded-host":
        "https://mercado.carrefour.com.br (https://mercado.carrefour.com.br/)",
    },
  })

  createRedirect({
    fromPath: `/sitemap4.xml`,
    toPath: `https://carrefourbrfood.myvtex.com/sitemap.xml`,
    statusCode: 200,
    conditions: {
      "x-forwarded-host":
        "https://mercado.carrefour.com.br (https://mercado.carrefour.com.br/)",
    },
  })

  createRedirect({
    fromPath: `/sitemap5.xml`,
    toPath: `https://mercado.carrefour.vtexcommercestable.com.br/sitemap.xml`,
    statusCode: 200,
    conditions: {
      "x-forwarded-host":
        "https://mercado.carrefour.com.br (https://mercado.carrefour.com.br/)",
    },
  })
}
