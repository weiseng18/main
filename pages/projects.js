import {
  Container,
  Text,
  Flex,
} from "@chakra-ui/react"

import Navbar from "../components/Navbar"

import { projects } from "../utils/getProjects"
import ProjectDisplay from "../components/ProjectDisplay"

const Projects = () => {
  return (
    <Container>
      <Flex
        flexDir="column"
        alignItems="center"
      >
        <Navbar page="projects" />

        <Text mb="20px">I prefer to prototype my ideas than to think about them theoretically. As such, I have several public (and private) projects on Github. Here I list some of the more interesting projects/ideas I have worked on.</Text>

        {projects.map((project) => (
          <ProjectDisplay key={project.link} project={project} />
        ))}

      </Flex>
    </Container>
  )
}

export default Projects