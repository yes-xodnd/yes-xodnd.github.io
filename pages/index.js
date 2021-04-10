import { getAllPosts } from '../lib/api'
import PostList from '../components/PostList'

function Blog({ allPosts }) {

  return (
    <div>
      <PostList posts={allPosts} />
    </div>
  )
}
export default Blog

// static
export function getStaticProps() {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags'])
  
  return {
    props: {
      allPosts
    }
  }
} 