import {
  Container,
  Heading,
  Text,
  Flex
} from "@chakra-ui/react"

import Navbar from "../components/Navbar"

const Index = () => {
  return (
    <Container height="100vh">
      <Navbar/>
      <Flex
        height="calc(100% - 50px)"
        flexDir="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <Heading>This is Poppins</Heading>
        <Text>This is Roboto</Text>
      </Flex>
    </Container>
  )
}

export default Index