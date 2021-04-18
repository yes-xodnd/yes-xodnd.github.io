import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import ButtonScrollUp from './ButtonScrollUp'

export default function Layout({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Main>
        <Component { ...pageProps } />
      </Main>
      <Footer />
      <ButtonScrollUp />
    </>
  )
}

const Main = styled.main`
  max-width: 1024px;
  margin: 3rem auto 10rem;
`