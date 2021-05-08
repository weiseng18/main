import { extendTheme } from "@chakra-ui/react"

const fonts = {
  heading: "Poppins",
  body: "Roboto"
}

const theme = extendTheme({
  fonts
})

export default theme