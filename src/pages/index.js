import styled from 'styled-components'
import { getAllPosts } from '../lib/api'
import Posts from '../components/Posts'

function Home({ allPosts, allTags }) {
  return (
    <div>
      <Posts { ...{ allPosts, allTags } } ></Posts>
    </div>
  ) 
}
export default Home

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

