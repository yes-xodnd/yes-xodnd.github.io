import { memo } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import dateFormat from '../lib/dateFormat'

function PostListItem({ post }) {
  const { slug, date, title, tags } = post;
  
  return (
    <ListItem key={slug}>
      <Date>{ dateFormat(date) }</Date>
      <Link href={'/posts/[slug].js'} as={`/posts/${slug}`} >
        <Title>{ title }</Title>
      </Link>
      <Tags tags={tags} />
    </ListItem>
  )
}
export default memo(PostListItem);

// components
const Tags = ({ tags }) => (
  <TagsContainer>
    { tags.map(tag => <TagBadge key={tag}>{ tag }</TagBadge>)}
  </TagsContainer>
)

// style
const ListItem = styled.li`
  padding: 1rem 2rem;
  /* border-bottom: 1px solid ${({ theme }) => theme.color.lightgrey }; */
  transition: 200ms;
`

const Title = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  transition: 200ms;
  
  &:hover {
    color: ${({ theme }) => theme.color.green };
    cursor: pointer;
  }
`

const Date = styled.div`
  font-size: 0.8rem;
  color: grey;
  margin-left: 3px;
`

const TagsContainer = styled.div`
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