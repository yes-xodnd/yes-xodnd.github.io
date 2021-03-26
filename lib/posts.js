import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// const fs = require('fs')
// const path = require('path')
// const matter = require('gray-matter')

const postsPath = path.join(process.cwd(), '_posts')

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsPath)

  const allPosts = fileNames.map((fileName, id) => {
    const filePath = path.join(postsPath, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const matterResult = matter(fileContent)

    return {
      id,
      ...matterResult.data,
      date: stringifyDate(matterResult.data.date),
    } 
  })

  return allPosts
}

function stringifyDate(dateObj, delimeter = '/') {

  const year  = dateObj.getUTCFullYear()
  const month = dateObj.getUTCMonth()
  const date  = dateObj.getUTCDate()
  
  return [ year, month, date ].join(delimeter)
}