import { memo } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import dateFormat from '../lib/dateFormat'

function PostListItem({ post, handleClickTag }) {
  const { slug, date, title, tags } = post;
  
  return (
    <ListItem key={slug}>
      <Date>{ dateFormat(date) }</Date>
      <Link href={'/posts/[slug].js'} as={`/posts/${slug}`} >
        <Title>{ title }</Title>
      </Link>
      <Tags tags={tags} handleClick={handleClickTag} />
    </ListItem>
  )
}
export default memo(PostListItem);

// components
const Tags = ({ tags, handleClick }) => (
  <TagsContainer>
    { tags.map(tag => <TagBadge key={tag} onClick={handleClick(tag)} >{ tag }</TagBadge>)}
  </TagsContainer>
)

// style
const ListItem = styled.li`
  padding: 1rem 2rem;
  transition: 200ms;
  border: 1px solid transparent;
  
  &:hover {
    border: 1px solid black;
  }
`

const Title = styled.a`
  word-break: keep-all;
  font-size: ${({ theme }) => theme.font.lg };
  font-weight: bold;
  transition: 150ms;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.primary };
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
  border: 1px solid lightgrey;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.font.sm };
  transition: 100ms;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color.primary };
    color: white;
  }
`