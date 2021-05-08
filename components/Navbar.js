import Link from "next/link"
import { Flex, HStack, Box } from "@chakra-ui/react"

const Navbar = ({ page }) => {
  return (
    <Flex
      width="100%"
      height="50px"
      alignItems="center"
    >
      <HStack spacing={5}>
        <Item href="/" title="Home" selected={page === "index"} />
        <Item href="/projects" title="Projects" selected={page === "projects"} />
      </HStack>
    </Flex>
  )
}

const Item = ({ href, title, selected }) => {
  return (
    <Link href={href}>
      <Box fontWeight={`${selected ? "700" : "400"}`} _hover={{cursor: "pointer"}}>{title}</Box>
    </Link>
  )
}

export default Navbar