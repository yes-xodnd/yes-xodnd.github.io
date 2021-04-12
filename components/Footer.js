import styled from 'styled-components'

export default function Footer() {
  return (
    <Container>
      <Content>
        <a href="https://github.com/yes-xodnd/yes-xodnd.github.io" target="_blank">
          <div>github</div>
        </a>
      </Content>
    </Container>
  )
}

const Container = styled.footer`
  padding: 1rem 0;
  border-top: 1px solid grey;
`

const Content = styled.div`
  margin: auto;
  max-width: 1024px;
`