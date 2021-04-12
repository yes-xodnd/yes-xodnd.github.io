import styled from 'styled-components'

export default function Sidebar() {
  return (
    <Aside>
      
    </Aside>
  )
}

const Aside = styled.aside`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    width: 100%;
    max-width: 250px;
    margin-right: 30px;
    border-right: 1px solid ${({ theme }) => theme.color.lightgrey };
    height: auto;
  }
`