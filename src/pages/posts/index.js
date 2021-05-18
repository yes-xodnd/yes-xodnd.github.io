import styled from 'styled-components'
import { useState } from 'react'
import { getAllPosts } from '../../lib/api'
import PostListItem from '../../components/PostListItem'
import TagList from '../../components/TagList'
import ButtonScrollUp from '../../components/ButtonScrollUp'

function Posts({ allPosts, allTags }) {
  const [ posts, setPosts ] = useState(allPosts)
  const [ selectedTag, setSelectedTag ] = useState('')

  const handleClickTag = tag => () => {
    const newSelectedTag = selectedTag === tag ? '' : tag
    setSelectedTag(newSelectedTag)
    setPosts(
      !newSelectedTag
      ? allPosts
      : allPosts.filter(post => post.tags.includes(tag))
    )
  }

  return (
    <Container>
      <TagList { ...{ 
        allTags,
        selectedTag,
        handleClickTag,
      } } />

      <ListContainer>
        <List>
          { posts.map(post => 
            <PostListItem
              post={post}
              handleClickTag={handleClickTag}
              key={post.slug}
            />)
          }
        </List>
      </ListContainer>

      <ButtonScrollUp />
    </Container>
  ) 
}
export default Posts

// static
export function getStaticProps() {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags'])
  const allTags = getAllTags(allPosts)
  
  return {
    props: {
      allPosts,
      allTags
    }
  }
} 

function getAllTags(allPosts) {
  const map = {}

  for (let post of allPosts) {
    for (let tag of post.tags) {
      map[tag] = map[tag] ? map[tag] + 1 : 1
    }
  }
  return Object
  .entries(map)
  .map(([tagName, count]) => ({ tagName, count }))
  .sort((a, b) => b.count - a.count)
}

// style
const Container = styled.div`
  padding: 2rem 1rem;
  min-height: 100vh;

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`

const ListContainer = styled.section`
  width: 100%;
  max-width: 768px;
  /* margin: 0 auto; */
`

const List = styled.ul`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`