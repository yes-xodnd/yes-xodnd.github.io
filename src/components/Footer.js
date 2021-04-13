import styled from 'styled-components'

export default function Footer() {
  return (
    <Container>
      <Content>
        ⓒ2021 ALL RIGHTS RESERVED
      </Content>
    </Container>
  )
}

const Container = styled.footer`
  padding: 1.5rem 2rem;
  /* border-top: 1px dashed black; */
  color: grey;
  text-align: center;
  font-size: ${({ theme }) => theme.font.sm };
`

const Content = styled.div`
  margin: auto;
  max-width: 1024px;
`