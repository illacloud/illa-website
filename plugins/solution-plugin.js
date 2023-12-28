const pagePluginExports = require("@docusaurus/plugin-content-pages")
const utils = require("@docusaurus/utils")

const PREFIX = /solutions-/

const defaultPagePlugin = pagePluginExports.default

async function pagePluginExtended(...pluginArgs) {
  const pagePluginInstance = await defaultPagePlugin(...pluginArgs)

  return {
    ...pagePluginInstance,
    contentLoaded: async function (data) {
      const { content, actions } = data
      const { addRoute, createData } = actions
      if (!content) {
        return
      }
      // Create routes for blog entries.
      await Promise.all(
        content.map(async (metaDta) => {
          const { source, permalink } = metaDta || {}
          if (PREFIX.test(permalink)) {
            const metaPath = await createData(
              `${utils.docuHash(source)}.json`,
              JSON.stringify(metaDta, null, 2),
            )
            const path = permalink.replace(PREFIX, "")
            addRoute({
              path: path,
              component: "@theme/SolutionsPage",
              exact: true,
              modules: {
                content: source,
              },
            })
          } else {
            addRoute({
              path: permalink,
              component: source,
              exact: true,
              modules: {
                config: `@generated/docusaurus.config`,
              },
            })
          }
        }),
      )
    },
  }
}

module.exports = {
  ...pagePluginExports,
  default: pagePluginExtended,
}
