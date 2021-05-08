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
        <Link href="/">
          Home
        </Link>
        <Link href="/projects">
          Projects
        </Link>
      </HStack>
    </Flex>
  )
}

export default Navbar