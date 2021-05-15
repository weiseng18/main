import { extendTheme } from "@chakra-ui/react"

const styles = {
  global: {
    "html, body": {
      margin: 0,
      padding: 0,
    },
  },
}

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
  styles,
  fonts,
  components: {
    Container
  }
})

export default theme