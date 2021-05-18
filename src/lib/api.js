import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

/**
 * A post
 * @typedef {Object} Post
 * @property {string} slug - file name without .md
 * @property {string} title - title
 * @property {string} date - date object as JSON
 * @property {string[]} tags - tags
 * @property {string} content - content in markdown format
 */

const POSTS_PATH = join(process.cwd(), '_posts')

/**
 * 전체 post 목록을 조회합니다. 
 * fields를 통해 원하는 필드만 요청할 수 있습니다.
 * 
 * @param {string[]=} fields Array of post property names you want to get
 * @returns {Post[]} Array of posts sorted in descending order
 */
export function getAllPosts(fields = []) {
  const posts = parseAllPosts()

  return Object
    .keys(posts)
    .map(slug => filterPostByFields(posts[slug], fields))
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
  // console.log(`\n [api] getPostBySlug ${slug}\n`)
  const post = parsePostBySlug(slug)

  return filterPostByFields(post, fields)
}

/**
 * 포스트 정보에서 선택한 필드만 필터링해 반환합니다.
 * 
 * @param {Post} post 
 * @param {string[]} fields 
 * @returns {Object} Post filtered
 */
function filterPostByFields(post, fields = []) {
  const fieldsDefault = [ 'slug', 'date' ]
  const fieldSet = new Set([ ...fields, ...fieldsDefault ])
  const postData = {}

  fieldSet.forEach(field => {
    if (post[field]) postData[field] = post[field]
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
    console.error(`\n[api] 디렉토리에 마크다운 파일이 없습니다. \n${POSTS_PATH}\n`)
  }

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i]
    const post = parsePostBySlug(slug)

    if (post.published) { 
      posts[slug] = post 
    }
  }

  console.log(`\n[api] parsed all posts \n${Object.keys(posts).length}\n`)
  return posts
}

/**
 * slug를 이용해 포스트 디렉토리에서 해당 문서를 파싱합니다.
 * 
 * @param {string} slug 
 * @returns {Post} Post object
 */
function parsePostBySlug(slug) {
  // console.log(`\n[api] parse post\n ${slug}\n`)

  const filePath = join(POSTS_PATH, slug + '.md')
  const fileContents = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContents)
  const { title, date: _date, tags: _tags, published } = data
  const date = _date.toJSON()
  const tags = _tags.split(' ')

  return { 
    slug,
    title,
    date,
    tags,
    content, 
    published
  }
}