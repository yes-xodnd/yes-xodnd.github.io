import Link from 'next/link'
import styled from 'styled-components'

export default function Header() {
  return (
    <Container>
      <Content>
        <Link href="/">YES-XODND BLOG.</Link>
      </Content>
    </Container>
  )
}

const Container = styled.header`
  padding: 2rem 0;
`

const Content = styled.div`
  margin: auto;
  max-width: 1024px;
`