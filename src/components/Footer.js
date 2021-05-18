import styled from 'styled-components'

export default function Footer() {
  return (
    <Container>
      <Content>
        <a
        href="https://github.com/yes-xodnd"
        target="_blank"
        rel="noopener noreferrer ">
          <i aria-hidden className="fab fa-github"></i>
          <span>yes-xodnd</span>
        </a>
        <div>ⓒ2021 ALL RIGHTS RESERVED</div>
      </Content>
    </Container>
  )
}

const Container = styled.footer`
  padding: 2rem;
  border-top: 1px solid black;
  color: grey;
  text-align: center;
  font-size: ${({ theme }) => theme.font.sm };
`

const Content = styled.div`
  margin: auto;
  max-width: 1024px;
  
  i {
    margin-right: 0.5rem;
  }

  div {
    margin-top: 0.5rem;
  }
`