import Link from "next/link"
import { Flex, HStack, StackDivider, Box } from "@chakra-ui/react"

const Navbar = ({ page }) => {
  return (
    <Flex
      width="100%"
      py={8}
      alignItems="center"
      position="sticky"
      top="0"
      bgColor="white"
    >
      <HStack spacing={5} divider={<StackDivider borderLeft="1px" borderColor="gray.500" />}>
        <Item href="/" title="Home" selected={page === "index"} />
        <Item href="/projects" title="Projects" selected={page === "projects"} />
      </HStack>
    </Flex>
  )
}

const Item = ({ href, title, selected }) => {
  return (
    <Link href={href}>
      <Box fontWeight={`${selected ? "700" : "400"}`} _hover={{cursor: "pointer", textDecoration: "underline"}}>{title}</Box>
    </Link>
  )
}

export default Navbar