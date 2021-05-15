/**
 * This module exports a constant, projects, an array of all the index.mdx in /projects
 */

function importAll(r) {
  return r.keys().map((file) => {
    const path = file.substr(1).replace(/\/index.mdx$/, "")
    const index = require("../projects" + path + "/index.mdx")
    const full = require("../projects" + path + "/full.mdx")

    return {
      link: path,
      index,
      full,
    }
  })
}

export const projects = importAll(
  require.context("../projects/", true, /index.mdx$/)
)
