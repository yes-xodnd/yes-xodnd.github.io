import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../style/GlobalStyle'
import theme from '../style/theme'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout Component={Component} pageProps={pageProps} />
      </ThemeProvider>
    </>
  )
}