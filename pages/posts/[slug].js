import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

function Post({ post }) {
  return (
    <div>{ post.title }</div>
  )
}

export default Post

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'content',
  ])

  const content = await markdownToHtml(post.content)
  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(({ slug }) => {

      return {
        params: {
          slug
        },
      }
    }),
    fallback: false,
  }
}
