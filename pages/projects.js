import {
  Container,
  Heading,
  Text,
  Flex
} from "@chakra-ui/react"

import Navbar from "../components/Navbar"

const Projects = () => {
  return (
    <Container height="100vh">
      <Navbar/>
      <Flex
        flexDir="column"
        alignItems="center"
      >
        <Text>I prefer to prototype my ideas than to think about them theoretically. As such, I have several public (and private) projects on Github. Here I list some of the more interesting projects/ideas I have worked on.</Text>
      </Flex>
    </Container>
  )
}

export default Projects