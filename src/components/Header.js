import Link from 'next/link'
import styled from 'styled-components'

export default function Header() {
  return (
    <Container>
      <Content>
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
  justify-content: flex-end;

  padding: 1rem;
  margin: auto;
  max-width: 1024px;
`

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`