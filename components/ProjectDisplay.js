import ProjectLayout from "./ProjectLayout"

const ProjectDisplay = ({ project, idx }) => {
  const {
    link,
    index: {
      meta,
      default: Content,
    },
    full: {
      meta: fullMeta,
      default: FullContent,
    },
  } = project

  return (
    <ProjectLayout
      isOdd={idx%2 == 1}
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