import styled from 'styled-components'
import { getAllPosts } from '../../lib/api'
import PostListItem from '../../components/PostListItem'

function Posts({ allPosts }) {
  return (
    <List>
      { allPosts.map(post => <PostListItem post={post} key={post.slug} />) }
    </List>
  ) 
}
export default Posts

// static
export function getStaticProps() {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags'])
  
  return {
    props: {
      allPosts
    }
  }
} 

// style
const List = styled.ul`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`