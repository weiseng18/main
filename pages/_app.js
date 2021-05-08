import { ChakraProvider } from '@chakra-ui/react'

import "@fontsource/poppins/600.css"
import "@fontsource/roboto/700.css"
import "@fontsource/roboto/400.css"

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp