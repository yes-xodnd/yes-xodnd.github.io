import Link from 'next/link'

const PostItem = ({ slug, title, date }) => (
  <li key={ slug }>
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a href="">
        <h3>{ title }</h3>
        <div>
          <span>{ date }</span>
        </div>
      </a>
    </Link>
  </li>
)

const PostList = ({ posts }) => (
  <ul>
    { posts.map(post => PostItem(post)) }
  </ul>
)

export default PostList