/**
 * This module exports a constant, projects, an array of all the items in ../pages/projects
 */

function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(fileName)
  }))
}

export const projects = importAll(
  require.context("../pages/projects/", true, /.mdx$/)
)
