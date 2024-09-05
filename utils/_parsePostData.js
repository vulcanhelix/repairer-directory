import { serialize } from 'next-mdx-remote/serialize'
import he from 'he'

const removeCustomHeadingIds = (content) => {
  return content.replace(/(\#{1,6}\s.*?)\s*\{#[\w-]+\}\s*$/gm, '$1')
}

const parsePostData = async ({ content, published, ...post }) => ({
  ...(content && {
    content: {
      markdown: content,
      mdx: await serialize(removeCustomHeadingIds(he.decode(content)))
    }
  }),
  ...(published && {
    formattedPublished: new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(published))
  }),
  ...post
})

export { parsePostData }
