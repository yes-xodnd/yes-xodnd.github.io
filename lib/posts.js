import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_PATH = path.join(process.cwd(), '_posts')

// [for test on node.js]
// const fs = require('fs')
// const path = require('path')
// const matter = require('gray-matter')
// console.log(getAllPosts())

export function getAllPosts() {
  const fileNames = fs.readdirSync(POSTS_PATH)
  const allPosts = fileNames.map((fileName, id) => (
    fileToPostData(POSTS_PATH, fileName, id)
  ));
  return allPosts
}

function fileToPostData(postsPath, fileName, id) {
  const filePath = path.join(postsPath, fileName)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const matterResult = matter(fileContent)

  return {
    id,
    ...matterResult.data,
    date: stringifyDate(matterResult.data.date),
    content: materResult.content,
  } 
}

function stringifyDate(dateObj, delimeter = '/') {
  const year  = dateObj.getUTCFullYear()
  const month = dateObj.getUTCMonth()
  const date  = dateObj.getUTCDate()
  
  return [ year, month, date ].join(delimeter)
}