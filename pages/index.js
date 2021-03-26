import { getAllPosts } from '../lib/posts';

function Blog({ allPosts }) {

  const PostItem = ({ title, id }) => (
    <li key={ id }>
      <h3>{ title }</h3>
    </li>
  )

  const PostList = ({ posts }) => (
    <ul>
      { posts.map(post => PostItem(post)) }
    </ul>
  )

  return (
    <div>
      <h1>yes-xodnd blog</h1>

      <PostList posts={allPosts} />
    </div>
  )
}

export default Blog


export async function getStaticProps() {
  const allPosts = getAllPosts()
  return {
    props: {
      allPosts
    }
  }
} 