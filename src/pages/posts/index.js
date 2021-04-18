import styled from 'styled-components'
import { useState } from 'react'
import { getAllPosts } from '../../lib/api'
import PostListItem from '../../components/PostListItem'
import Category from '../../components/Category'

function Posts({ allPosts, allTags }) {
  const [posts, setPosts] = useState(allPosts)
  const [ selectedTag, setSelectedTag ] = useState('')

  const handleClickTag = e => {
    const tag = e.target.innerText
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
      <Category { ...{ allTags, selectedTag, handleClickTag } } />
      <ListContainer>
        <List>
          { posts.map(post => <PostListItem post={post} key={post.slug} />) }
        </List>
      </ListContainer>
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
  return Object.keys(map).sort((a, b) => map[b] - map[a])
}

// style
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 1rem 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const ListContainer = styled.section`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`

const List = styled.ul`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`