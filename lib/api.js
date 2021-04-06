import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

/**
 * A post
 * @typedef {Object} Post
 * @property {string} slug - file name without .md
 * @property {string} title - title
 * @property {string} date - The date as JSON
 * @property {string[]} tags - tags
 * @property {string} content - content in markdown format
 */

const POSTS_PATH = join(process.cwd(), '_posts')
let posts = {}
let is_parsed = false

/**
 * 전체 post 목록을 조회합니다. 
 * fields를 통해 원하는 필드만 요청할 수 있습니다.
 * 
 * @param {string[]=} fields Array of post property names you want to get
 * @returns {Post[]} Array of posts sorted in descending order
 */
export function getAllPosts(fields = []) {
  if (!is_parsed) {
    posts = parseAllPosts()
    console.log(`[api] parse all posts \n${Object.keys(posts)}\n`)
    is_parsed = true
  }

  return Object
    .keys(posts)
    .map(slug => getPostBySlug(slug, fields))
    .sort((post1, post2) => post1.date > post2.date ? -1 : 1 )
}

/**
 * slug를 통해 특정 포스트 정보를 조회합니다.
 * fields를 통해 원하는 필드만 요청할 수 있습니다.
 * 
 * @param {string} slug - slug
 * @param {string[]} fields - Array of post property names you want to get
 * @returns 
 */
export function getPostBySlug(slug, fields = []) {

  const post = posts[slug] || parsePostBySlug(slug)

  if (!post) {
    throw new Error(`[api] 존재하지 않는 slug입니다 \n${slug}\n`)
  }

  return filterPostByFields(post, fields)
}

/**
 * 포스트 정보에서 선택한 필드만 필터링합니다.
 * 
 * @param {Post} post 
 * @param {string[]} fields 
 * @returns {Object} Post filtered
 */
function filterPostByFields(post, fields = []) {
  const fieldsDefault = [ 'slug', 'date' ]
  const fieldSet = new Set([ ...fields, ...fieldsDefault ])
  let postData = {}

  fieldSet.forEach(field => {
    if (post[field]) {
      postData[field] = post[field]
    }
  })

  return postData
}

/**
 * 포스트 디렉토리에 있는 모든 문서를 파싱합니다.
 * 
 * @returns {Object} key: slug / value: Post
 */
 function parseAllPosts() {
  const posts = {}
  const slugs = fs
    .readdirSync(POSTS_PATH)
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.slice(0, -3))

  if (slugs.length === 0) {
    console.error(`[api] 디렉토리에 마크다운 파일이 없습니다. \n${POSTS_PATH}\n`)
  }

  slugs.forEach(slug => {
    const post = parsePostBySlug(slug)
    
    if (post.published === 'true') { 
      posts[slug] = post 
    }
  })
  return posts
}

/**
 * slug를 이용해 포스트 디렉토리에서 해당 문서를 파싱합니다.
 * 
 * @param {string} slug 
 * @returns {Post} Post object
 */
function parsePostBySlug(slug) {
  console.log(`[api] parse post\n ${slug}\n`)

  const filePath = join(POSTS_PATH, slug + '.md')
  const fileContents = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContents)
  const { title, date: _date, tags: _tags } = data
  const date = _date.toJSON()
  const tags = _tags.split(' ')

  return { slug, title, content, date, tags }
}