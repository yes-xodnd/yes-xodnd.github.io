// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter')

const postsPath = path.join(process.cwd(), '_posts')

function getPostsGrayMattered() {
  const fileNames = fs.readdirSync(postsPath)

  const allPosts = fileNames.map(fileName => {
    const filePath = path.join(postsPath, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    return matter(fileContent)
  })

  return allPosts
}

console.log(getPostsGrayMattered())

