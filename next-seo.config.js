const description = `Generate Endless leads with Modern Marketing Strategies designed for success`
const title = `Growth Strategy - They sell websites, we build lead generation machines`
const url = `https://growthstrategy.co.za`

const seo = {
  title,
  titleTemplate: '%s | Growth Strategy',
  description,
  openGraph: {
    description,
    title,
    type: 'website',
    url
  },
  twitter: {
    handle: '@realbrucemartin',
    site: '@realbrucemartin'
  }
}

export { seo as defaultSEO, url as defaultUrl }
