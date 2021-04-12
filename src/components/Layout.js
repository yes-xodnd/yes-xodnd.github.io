import styled from 'styled-components'
import Header from './Header'
import SideBar from './Sidebar'
import Footer from './Footer'
import ButtonScrollUp from './ButtonScrollUp'

export default function Layout({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <Component { ...pageProps } />
      </Main>
      <Footer />

      <ButtonScrollUp />
    </>
  )
}

const Main = styled.main`
  max-width: 1024px;
  margin: 50px auto 100px;
  
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`