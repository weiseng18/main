import Link from "next/link"
import { Flex, HStack } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Flex
      width="100%"
      height="50px"
      alignItems="center"
    >
      <HStack spacing={5}>
        <Item href="/" title="Home" />
        <Item href="/projects" title="Projects" />
      </HStack>
    </Flex>
  )
}

const Item = ({ href, title }) => {
  return (
    <Link href={href}>
      {title}
    </Link>
  )
}

export default Navbar