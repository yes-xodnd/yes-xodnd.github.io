import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../style/GlobalStyle'
import theme from '../style/theme'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ButtonScrollUp from '../components/ButtonScrollUp'

export default function App({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Component { ...pageProps } />
        </main>
        <Footer />

        <ButtonScrollUp />
      </ThemeProvider>
    </>
  )
}
