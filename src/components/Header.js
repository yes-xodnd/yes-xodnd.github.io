import styled from 'styled-components'

export default function Header() {
  return (
    <Container>
      <Content>
        <TitleContainer>
          <h1>
            TAEWOONG PARK.
          </h1>
          <p>Frontend Devlog</p>
        </TitleContainer>

        <LinkList>
          <LinkListItem>
            <a
              href="https://github.com/yes-xodnd/"
              rel="noopener noreferrer"
              target="_black">
              GITHUB
            </a>
          </LinkListItem>
          <LinkListItem onClick={handleClickEmail}>E-MAIL</LinkListItem>
          <LinkListItem>
            <a
              href="https://github.com/yes-xodnd/portfolio/"
              rel="noopener noreferrer"
              target="_black">
              PORTFOLIO
            </a>
          </LinkListItem>
        </LinkList>
      </Content>

    </Container>
  )
}

function handleClickEmail() {
  navigator.clipboard.writeText('taewoong_park@naver.com')
  alert('메일 주소가 클립보드에 복사되었습니다.')
}


// style
const Container = styled.header`
  padding: 1rem;
  background: white;
  border-bottom: 1px solid black;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 1024px;
`

const TitleContainer = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.font.lg};
    margin: 0;
  }
  
  p {
    margin: 0;
    color: grey;
  }
`


const LinkList = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const LinkListItem = styled.li`
  padding: 0.5rem;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.font.sm};
  font-weight: bolder;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.primary };
  }
`