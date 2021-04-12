import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

async function markdownToHtml(markdown) {
  const result = await remark()
  .use(html)
  .use(prism)
  .process(markdown)
  return result.toString()
}

export default markdownToHtml