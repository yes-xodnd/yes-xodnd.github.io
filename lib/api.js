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
    .map(fileName => getPostByFileName(fileName, fields))
    .sort((post1, post2) => post1.dateObj > post2.dateObj ? -1 : 1 )
  return allPosts
}

export function getPostByFileName(fileName, fields = []) {
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
      dateObj: data.date
    }
  }
  return filterByFields(cache[fileName], fields)
}

function filterByFields(post, fields = []) {
  const fieldsDefault = [ 'fileName', 'slug', 'dateObj' ]
  const fieldSet = new Set([ ...fields, ...fieldsDefault ])
  
  let result = {}

  for (let field of fieldSet) {
    if (post[field]) {
      result[field] = post[field]
    }
  }
  return result
}

function stringifyDate(dateObj, delimeter = '.') {
  const year  = dateObj.getUTCFullYear()
  const month = dateObj.getUTCMonth() + 1
  const date  = dateObj.getUTCDate()

  return [
    year,
    (month < 10 ? '0' + month : month),
    date
  ].join(delimeter)
}

function createSlug(fileName) {
  return fileName.split(' ').join('-').slice(0, -3)
}