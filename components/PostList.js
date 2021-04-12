import styled from 'styled-components'
import PostListItem from './PostListItem'

export default function PostList({ posts }) {
  return (
    <List>
      { posts.map(post => <PostListItem post={post} key={post.slug} />) }
    </List>
  ) 
}

// style
const List = styled.ul`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`