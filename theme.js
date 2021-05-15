import { extendTheme } from "@chakra-ui/react"

const fonts = {
  heading: "Roboto",
  body: "Roboto"
}

const Container = {
  baseStyle: {
    maxW: '70ch',
    height: '100vh',
  }
}

const theme = extendTheme({
  fonts,
  components: {
    Container
  }
})

export default theme