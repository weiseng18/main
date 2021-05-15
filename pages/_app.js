import { ChakraProvider } from '@chakra-ui/react'

import "@fontsource/roboto/700.css"
import "@fontsource/roboto/400.css"

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp