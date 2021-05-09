import { Flex, Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

const ExternalLink = ({ href, children, externalIcon }) => {
  if (externalIcon)
    return (
      <Link color="blue.500" href={href} isExternal>
        <Flex alignItems="center">
          {children} <ExternalLinkIcon mx="4px" />
        </Flex>
      </Link>
    )

  else
    return (
      <Link color="blue.500" href={href} isExternal>
        {children}
      </Link>
    )
}

export default ExternalLink