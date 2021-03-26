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

export function getAllPosts() {
  const fileNames = fs.readdirSync(POSTS_PATH)
  const allPosts = fileNames.map(fileName => (
    getPostByFileName(fileName)
  ));
  return allPosts
}

function getPostByFileName(fileName) {
  if (cache[fileName]) {
    return cache[fileName]
  }
  
  const filePath = join(POSTS_PATH, fileName)
  const fileContents = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContents)

  const post = {
    fileName,
    content,
    ...data,
    date: stringifyDate(data.date),
  }

  cache[fileName] = post
  return post
}

function stringifyDate(dateObj, delimeter = '/') {
  const year  = dateObj.getUTCFullYear()
  const month = dateObj.getUTCMonth()
  const date  = dateObj.getUTCDate()
  
  return [ year, month, date ].join(delimeter)
}