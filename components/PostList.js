import Link from 'next/link'
import styled from 'styled-components'

export default function PostList({ posts }) {
  return (
    <List>
      { posts.map(post => PostItem(post)) }
    </List>
  ) 
}

// components
const Tags = ({ tags }) => (
  <TagWrapper>
    { tags.map(tag => <TagBadge key={tag}>{ tag }</TagBadge>)}
  </TagWrapper>
)

const PostItem = ({ slug, title, tags }) => (
  <ListItem key={slug}>
    <Link href={`/posts/${slug}`} >
      <Title>{ title }</Title>
    </Link>
    <Tags tags={tags} />
  </ListItem>
)

// style
const Title = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  transition: 200ms;
  
  &:hover {
    color: ${({ theme }) => theme.color.green };
    cursor: pointer;
  }
`

const List = styled.ul`
  margin: 0;
  padding: 1rem;
  list-style: none;
`

const ListItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightgrey };
`

const TagWrapper = styled.div`
  display: flex;
  padding: 1rem 0;
`

const TagBadge = styled.div`
  margin-right: 0.5rem;
  padding: 0.2rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.lightgrey };
  border-radius: 5px;
  background: ${({ theme }) => theme.color.badge };
  font-size: ${({ theme }) => theme.font.sm };
  transition: 200ms;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color.green };
    color: white;
  }
`