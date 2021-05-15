/**
 * This module exports a constant, projects, an array of all the index.mdx in /projects
 */

function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(fileName)
  }))
}

export const projects = importAll(
  require.context("../projects/", true, /index.mdx$/)
)
