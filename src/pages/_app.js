import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../style/GlobalStyle'
import theme from '../style/theme'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function App({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component { ...pageProps } />
        <Footer />
      </ThemeProvider>
    </>
  )
}