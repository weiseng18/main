import {
  Text,
  Flex,
  Box,
  HStack,
} from "@chakra-ui/react"

import ExternalLink from './ExternalLink'

const ProjectLayout = ({ title, url, github, tags, children }) => {
  return (
    <Flex
      my="16px"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex
        height="100%"
        flexDir="column"
      >
        <Text fontWeight="700" mb="2">{title}</Text>
        <HStack spacing={3}>
          {url && (
            <ExternalLink href={url} externalIcon>
              Live
            </ExternalLink>
          )}
          {github && (
            <ExternalLink href={github} externalIcon>
              Github
            </ExternalLink>
          )}
        </HStack>
      </Flex>
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

export default ProjectLayout