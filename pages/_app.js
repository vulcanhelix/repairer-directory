import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

import { SiteLayout } from '@/layout'

import { defaultSEO } from '../next-seo.config'
import { theme } from '../styles/theme'
import '../styles/css/global.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <SiteLayout>{page}</SiteLayout>)

  return (
    <ChakraProvider theme={theme}>
       <Script
          strategy="afterInteractive"
        src={"https://www.googletagmanager.com/ns.html?id=GTM-NRSKND7"}
      />
      <Script id="google-analytics" strategy="afterInteractive">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GTM-NRSKND7');
    `}
  </Script>
      <DefaultSeo {...defaultSEO} />
      {getLayout(<Component {...pageProps} />)}
     
    </ChakraProvider>
  )
}


