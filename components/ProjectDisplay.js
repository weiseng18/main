import { useDisclosure } from "@chakra-ui/hooks"

import ProjectModal from "./ProjectModal"
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

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <ProjectLayout
        isOdd={idx%2 == 1}
        title={meta.title}
        url={meta.url}
        github={meta.github}
        tags={meta.tags}
        openModal={onOpen}
      >
        <Content />
      </ProjectLayout>
      <ProjectModal
        isOpen={isOpen}
        onClose={onClose}
        meta={fullMeta}
        Content={FullContent}
      />
    </>
  )
}

export default ProjectDisplay