import Link from 'next/link'
import styled from 'styled-components'

export default function Nav() {
  
  return (
    <nav>
      <List>
        <ListItem>
          <Link href='/'>HOME</Link>
        </ListItem>
        <ListItem>
          <Link href='/posts'>POSTS</Link>
        </ListItem>
      </List>
    </nav>
  )
}

const List = styled.ul`
  /* display: flex;
  justify-content: space-evenly; */
  list-style: none;
  margin: 0;
`

const ListItem = styled.li`
  display: inline-block;
  margin-left: 1rem;
`