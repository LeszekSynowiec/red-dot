const path = require("path")
const { create } = require("domain")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`src/layouts/project.js`)
  const result = await graphql(`
    query queryCMSPage {
      allDatoCmsProject {
        nodes {
          id
        }
      }
    }
  `)

  result.data.allDatoCmsProject.nodes.forEach(project => {
    createPage({
      path: `portfolio/wnetrza/${project.id}`,
      component: projectTemplate,
      context: {
        id: project.id,
      },
    })
  })
}
