import styled from 'styled-components'

export default function ButtonScrollUp() {

  return (
    <Button onClick={() => scrollTo(0, 0)}>
      <img src="../../assets/icon/up.svg" alt="up" title="맨 위로" />
    </Button>
  )
}

const Button = styled.button`
  position: fixed;
  right: 3rem;
  bottom: 3rem;

  width: 2rem;
  height: 2rem;
  border-radius: 2px;
  border: 1px solid black;
  background: white;  
  visibility: visible;
  transition: 200ms;

  &:hover {
    cursor: pointer;
  }
`

