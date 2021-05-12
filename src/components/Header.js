import Link from 'next/link'
import styled from 'styled-components'

export default function Header() {
  return (
    <Container>
      <Content>
        <Link href="/">
          <div>
            YES-XODND <br />
            DEV BLOG.
          </div> 
        </Link>
      </Content>
    </Container>
  )
}

const Container = styled.header`
  border-bottom: 1px solid black;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  margin: auto;
  max-width: 1024px;
`