import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdown'
import styled from 'styled-components'
import codeHighlight from '../../styles/mixin/codeHighlight'

const Content = styled.main`
  line-height: 1.8rem;

  a {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;
  }

  img {
    width: 80%;
    margin: 20px auto;
  }
  h2 {
    margin-top: 3rem;
  }
  ${codeHighlight}
`

function Post({ post }) {
  return (
    <>
      <h1>{ post.title }</h1>
      <Content dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
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
