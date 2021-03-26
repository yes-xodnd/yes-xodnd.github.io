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
  const allPosts = fileNames.map(fileName => (
    getPostByFileName(fileName, fields)
  ));
  return allPosts
}

function getPostByFileName(fileName, fields = []) {
  if (!cache[fileName]) {
    const slug = createSlug(fileName)
    const filePath = join(POSTS_PATH, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContents)

    cache[fileName] = {
      fileName,
      slug,
      content,
      ...data,
      date: stringifyDate(data.date),
    }
  }
  return filterByFields(cache[fileName], fields)
}

function filterByFields(post, fields = []) {
  const fieldsDefault = [ 'fileName', 'slug' ]
  const fieldSet = new Set([ ...fields, ...fieldsDefault ])
  let result = {}

  for (let field of fieldSet) {
    if (post[field]) {
      result[field] = post[field]
    }
  }
  return result
}

function stringifyDate(dateObj, delimeter = '/') {
  const year  = dateObj.getUTCFullYear()
  const month = dateObj.getUTCMonth()
  const date  = dateObj.getUTCDate()
  
  return [ year, month, date ].join(delimeter)
}

function createSlug(fileName) {
  return fileName.split(' ').join('-').slice(0, -3)
}