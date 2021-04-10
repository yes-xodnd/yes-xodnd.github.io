import styled from 'styled-components'
import PostListItem from './PostListItem'

export default function PostList({ posts }) {
  return (
    <List>
      { posts.map(post => PostListItem(post)) }
    </List>
  ) 
}

// style
const List = styled.ul`
  max-width: 640px;
  margin: 0;
  padding: 1rem;
  list-style: none;
`