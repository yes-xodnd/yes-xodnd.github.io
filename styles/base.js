import { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
  color: {
    primary: 'seagreen',
    lightgrey: '#EFEFEF',
  }
}

export const GlobalStyle = createGlobalStyle`
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

export function ThemedComponent({Component, props}) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  )
}