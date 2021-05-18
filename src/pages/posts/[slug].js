import styled from 'styled-components'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdown'
import dateFormat from '../../lib/dateFormat'
import codeHighlight from '../../style/codeHighlight'

export default function Post({ post }) {
  return (
    <>
    <Container>
    <Header>
      <Title>{ post.title }</Title>
      <Date>{ dateFormat(post.date) }</Date>
    </Header>
      <Content dangerouslySetInnerHTML={{ __html: post.content }} />
    </Container>
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
const Container = styled.section`
  min-height: 100vh;
  padding: 2rem;
  margin: auto;
  max-width: 768px;
`

const Header = styled.div`
  margin: 2rem 0 5rem;
  text-align: center;
`

const Title = styled.h1`
  margin: 0 0 1rem;
  font-size: ${({ theme }) => theme.font.lg };
  word-break: keep-all;
`

const Date = styled.div`
  font-size: ${({ theme }) => theme.font.sm };
  /* text-align: right; */
`

const Content = styled.article`
  line-height: 1.8rem;

  a {
    color: ${({ theme }) => theme.color.primary };
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
    
    &:visited {
      color: ${({ theme }) => theme.color.primary };
    }
  }

  img {
    display: block;
    width: 90%;
    margin: 2rem auto;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.color.lightgrey }
  }

  h2 {
    margin-top: 5rem;
  }

  h3 {
    margin-top: 3rem;
  }

  ul {
    padding-left: 1.5rem;
  }

  code:not([class]) {
    padding: 0.2rem 0.4rem ;
    background-color: ${({ theme }) => theme.color.lightgrey };
    border-radius: 3px;
  }

  blockquote {
    margin: 0;
    padding: 0.5rem 1.5rem 0.5rem;
    border-left: 3px solid ${({ theme }) => theme.color.primary };
    border-radius: 3px;
    background: ${({ theme }) => theme.color.lightgrey };
    font-size: ${({ theme }) => theme.font.sm };
  }

  ${codeHighlight}
`