import Link from "next/link"
import { Flex } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Flex
      width="100%"
      height="50px"
      alignItems="center"
    >
      <Link href="/">
        Home
      </Link>
    </Flex>
  )
}

export default Navbar