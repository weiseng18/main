import ProjectLayout from "./ProjectLayout"

const ProjectDisplay = ({ project }) => {
  const {
    link,
    module: { 
      meta,
      default: Content,
    },
  } = project

  return (
    <ProjectLayout
      title={meta.title}
      url={meta.url}
      github={meta.github}
      tags={meta.tags}
    >
      <Content />
    </ProjectLayout>
  )
}

export default ProjectDisplay