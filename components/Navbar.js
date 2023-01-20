import NextLink from "next/link"
import { Flex, HStack, StackDivider, Box, Link } from "@chakra-ui/react"

const Navbar = ({ page }) => {
  return (
    <Flex
      width="100%"
      py={8}
      alignItems="center"
      position="sticky"
      top="0"
      bgColor="white"
      zIndex="2"
    >
      <HStack spacing={5} divider={<StackDivider borderLeft="1px" borderColor="gray.500" />}>
        <Item href="/" title="Home" selected={page === "index"} />
        <Item href="/projects" title="Projects" selected={page === "projects"} />
        <Item href="/coursework" title="Coursework" selected={page === "coursework"} />
      </HStack>
    </Flex>
  )
}

const Item = ({ href, title, selected }) => {
  return (
    <NextLink href={href} passHref>
      <Link>
        <Box fontWeight={`${selected ? "700" : "400"}`} _hover={{cursor: "pointer", textDecoration: "underline"}}>{title}</Box>
      </Link>
    </NextLink>
  )
}

export default Navbar
