import {
  Text,
  Flex,
  Box,
  HStack,
} from "@chakra-ui/react"

import ExternalLink from './ExternalLink'

const ProjectLayout = ({ isOdd, title, url, github, tags, children }) => {
  let color_background, color_tagBackground, color_tagText
  if (isOdd) {
    color_background = "white"
    color_tagBackground = "gray.200"
    color_tagText = "gray.600"
  } else {
    color_background = "gray.100"
    color_tagBackground = "gray.500"
    color_tagText = "white"
  }

  return (
    <Flex
      my="16px"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      bgColor={color_background}
      py={4}
      px={2}
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
                backgroundColor={color_tagBackground}
                color={color_tagText}
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