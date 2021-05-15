import {
  Container,
  HStack,
  Stack,
  StackDivider,
  Image,
  Text,
  Flex
} from "@chakra-ui/react"

import Navbar from "../components/Navbar"
import ExternalLink from "../components/ExternalLink"

const Index = () => {
  return (
    <Container>
      <Flex
        height="100%"
        flexDir="column"
        alignItems="center"
      >
        <Navbar page="index" />
        <Flex flexDir="column" justifyContent="center" flexGrow={1}>
          <Stack spacing={10} alignItems="center" mb={16}>
            <Text my={0}>Hey there, I'm Wei Seng.</Text>
            <Text>This is where I consolidate my side projects.</Text>
            <HStack spacing={5} divider={<StackDivider borderColor="gray.300" />}>
              <SocialItem
                url="https://github.com/weiseng18/"
                src="github.svg"
              >
                Github
              </SocialItem>
              <SocialItem
                url="https://www.linkedin.com/in/tanweiseng"
                src="linkedin.svg"
              >
                LinkedIn
              </SocialItem>
            </HStack>
          </Stack>
        </Flex>
      </Flex>
    </Container>
  )
}

const SocialItem = ({ url, src, children }) => {
  return (
    <Flex
      alignItems="center"
    >
      <Image src={src} boxSize="20px" mr="2"/>
      <ExternalLink href={url}>{children}</ExternalLink>
    </Flex>
  )
}

export default Index