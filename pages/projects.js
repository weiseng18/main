import {
  Container,
  Text,
  Flex,
  Box,
  HStack,
} from "@chakra-ui/react"

import Navbar from "../components/Navbar"
import ExternalLink from "../components/ExternalLink"

const Projects = () => {
  return (
    <Container>
      <Navbar page="projects" />
      <Flex
        flexDir="column"
        alignItems="center"
      >
        <Text mb="20px">I prefer to prototype my ideas than to think about them theoretically. As such, I have several public (and private) projects on Github. Here I list some of the more interesting projects/ideas I have worked on.</Text>

        <Project
          title="pixelart"
          url="https://weiseng18.github.io/pixelart/"
          tags={['javascript']}
        >
          Create and animate pixel art in the browser
        </Project>

        <Project
          title="discord-weather"
          url="https://github.com/weiseng18/discord-weather/"
          tags={['python', 'bot']}
        >
          Gets 2-hour weather forecast from{" "}
          <ExternalLink href="https://data.gov.sg">
            data.gov.sg
          </ExternalLink>
          , and pings everyone if the forecast is rain.
        </Project>

      </Flex>
    </Container>
  )
}

const Project = ({ title, url, tags, children }) => {
  return (
    <Flex
      my="16px"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <ExternalLink href={url} externalIcon>
        <Text fontWeight="700">{title}</Text>
      </ExternalLink>
      <Box width="60%">
        <HStack spacing={3} mb="2">
          {tags.map((item, idx) => {
            return (
              <Text
                key={idx}
                backgroundColor="gray.200"
                color="gray.600"
                py="1"
                px="3"
                borderRadius="25px"
              >
                {item}
              </Text>
            )
          })}
        </HStack>
        <Text>{children}</Text>
      </Box>
    </Flex>
  )
}

export default Projects