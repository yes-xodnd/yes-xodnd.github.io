import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdown'
import styled from 'styled-components'
import codeHighlight from '../../styles/codeHighlight'

export default function Post({ post }) {
  return (
    <>
      <h1>{ post.title }</h1>
      <Content dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  )
}

// next
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

// style
const Content = styled.main`
  line-height: 1.8rem;

  a {
    color: ${({ theme }) => theme.color.blue };
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
    
    &:visited {
      color: ${({ theme }) => theme.color.blue };
    }
  }
  img {
    display: block;
    width: 60%;
    margin: 2rem auto;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.color.lightgrey }
  }
  h2 {
    margin-top: 3rem;
  }
  code:not([class]) {
    padding: 0.2rem 0.4rem ;
    background-color: ${({ theme }) => theme.color.lightgrey };
    border-radius: 3px;
  }
  blockquote {
    margin: 0;
    padding: 0.5rem 1rem 0.5rem 3rem;
    border-left: 3px solid ${({ theme }) => theme.color.green };
    background: ${({ theme }) => theme.color.lightgrey };
    font-size: ${({ theme }) => theme.font.sm };
  }

  ${codeHighlight}
`