const PostItem = ({ slug, title, date }) => (
  <li key={ slug }>
    <h3>{ title }</h3>
    <div>
      <span>{ date }</span>
    </div>
  </li>
)

const PostList = ({ posts }) => (
  <ul>
    { posts.map(post => PostItem(post)) }
  </ul>
)

export default PostList