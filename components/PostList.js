const PostItem = ({ slug, title, date }) => (
  <li key={ slug }>
    <a href={`/posts/${slug}`}>
      <h3>{ title }</h3>
      <div>
        <span>{ date }</span>
      </div>
    </a>
  </li>
)

const PostList = ({ posts }) => (
  <ul>
    { posts.map(post => PostItem(post)) }
  </ul>
)

export default PostList