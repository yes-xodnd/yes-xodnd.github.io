import Link from 'next/link'
import styled from 'styled-components'

export default function Header() {
  return (
    <Container>
      <Content>
        <Link href="/">YES-XODND BLOG</Link>

        <Nav>
          <Link href="/">HOME</Link>
          <Link href="/posts">POSTS</Link>
        </Nav>
      </Content>
    </Container>
  )
}

const Container = styled.header`
  background: white;
  border-bottom: 1px solid black;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 1rem;
  margin: auto;
  max-width: 1024px;
`

const Logo = styled.div`
  
`

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`