import { GlobalStyle, ThemedComponent } from '../styles/base'

export default function App({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <ThemedComponent
        Component={Component}
        props={pageProps}
      />
    </>
  )
}