import {
  Heading,
  Text,
  Flex
} from "@chakra-ui/react"

const Index = () => {
  return (
    <Flex
      height="100vh"
      flexDir="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <Heading>This is Poppins</Heading>
      <Text>This is Roboto</Text>
    </Flex>
  )
}

export default Index