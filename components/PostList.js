import Link from 'next/link'

const PostItem = ({ slug, title, date }) => (
  <li key={ slug }>
    <h3>{ title }</h3>
    <Link href={`/posts/${slug}`} >
      Read
    </Link>
  </li>
)

const PostList = ({ posts }) => (
  <ul>
    { posts.map(post => PostItem(post)) }
  </ul>
) 

export default PostList