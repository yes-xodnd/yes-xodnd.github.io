import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @media (max-width: 768px) {
    html {
      font-size: 12px;
    }
  }

  body {
    margin: auto;
    padding: 0;
    box-sizing: border-box;
    max-width: 768px;
  }
`

const theme = {
  colors: {
    primary: 'seagreen',
    lightgrey: '#EFEFEF',
  }
}

export default function App({ Component, pageProps }) {
  console.log('App')
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}