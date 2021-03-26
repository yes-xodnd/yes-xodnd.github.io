// lib
import { getAllPosts } from '../lib/api'

// component
import PostList from '../components/PostList'

function Blog({ allPosts }) {

  return (
    <div>
      <h1>yes-xodnd blog</h1>

      <h2>게시물 목록</h2>
      <PostList posts={allPosts} />
    </div>
  )
}

export default Blog

export async function getStaticProps() {
  const allPosts = getAllPosts(['slug', 'title', 'date'])
  return {
    props: {
      allPosts
    }
  }
} 