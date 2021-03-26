import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const POSTS_PATH = join(process.cwd(), '_posts')
const cache = {}

// [for test on node.js]
// const fs = require('fs')
// const path = require('path')
// const matter = require('gray-matter')
// console.log(getAllPosts())

export function getAllPosts(fields = []) {
  const fileNames = fs.readdirSync(POSTS_PATH)
  const allPosts = fileNames
    .map(fileName => getPostBySlug(fileName.slice(0, -3), fields))
    .sort((post1, post2) => post1.date > post2.date ? -1 : 1 )
  return allPosts
}

export function getPostBySlug(slug, fields = []) {

  if (!cache[slug]) {
    const filePath = join(POSTS_PATH, slug + '.md')
    const fileContents = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContents)

    cache[slug] = {
      slug,
      content,
      ...data,
      date: stringifyDate(data.date),
    }
  }
  return filterByFields(cache[slug], fields)
}

function filterByFields(post, fields = []) {
  const fieldsDefault = [ 'slug', 'date' ]
  const fieldSet = new Set([ ...fields, ...fieldsDefault ])

  let result = {}

  for (let field of fieldSet) {
    if (post[field]) {
      result[field] = post[field]
    }
  }
  return result
}

function stringifyDate(dateObj) {
  return dateObj.toJSON().split('T')[0]
}