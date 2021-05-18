import styled, { ThemeProvider } from 'styled-components'
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
        <Main>
          <Component { ...pageProps } />
        </Main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

const Main = styled.main`
  padding: 2rem 1rem;
  min-height: 100vh;
`