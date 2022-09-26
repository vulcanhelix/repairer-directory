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
        src={"https://www.googletagmanager.com/ns.html?id=G-DYNE082NCJ"}
      />

      <Script id="google-analytics" strategy="afterInteractive">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DYNE082NCJ');
    `}
      </Script>
   
      <Script strategy="afterInteractive">
      
        {`
        (function() {
            window.sib = {
                equeue: [],
                client_key: "6ne86140q0iixo24rm5qb2yf"
            };
        })();
            window.sendinblue = {};
            for (var j = ['track', 'identify', 'trackLink', 'page'], i = 0; i < j.length; i++) {
            (function(k) {
                window.sendinblue[k] = function() {
                    var arg = Array.prototype.slice.call(arguments);
                    (window.sib[k] || function() {
                            var t = {};
                            t[k] = arg;
                            window.sib.equeue.push(t);
                        })(arg[0], arg[1], arg[2], arg[3]);
                    };
                })(j[i]);
            }
            var n = document.createElement("script"),
                i = document.getElementsByTagName("script")[0];
            n.type = "text/javascript", n.id = "sendinblue-js", n.async = !0, n.src = "https://sibautomation.com/sa.js?key=" + window.sib.client_key, i.parentNode.insertBefore(n, i), window.sendinblue.page();
        })();
        `}
      </Script>
      <Script strategy="afterInteractive">
      strategy="afterInteractive"
        {`
        !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="VSXYZ9IzpCR8DVQnWt7KfCm6ldpZ1aJs";;analytics.SNIPPET_VERSION="4.15.3";
        analytics.load("VSXYZ9IzpCR8DVQnWt7KfCm6ldpZ1aJs");
        analytics.page();
        }}();
        `}

      </Script>
      <Script strategy="afterInteractive">
      
        {`
       !function(t,e,r,c,a,n,s){t.ClAnalyticsObject=a,t[a]=t[a]||[],t[a].methods=["trackSubmit","trackClick","pageview","identify","track"],t[a].factory=function(e){return function(){var r=Array.prototype.slice.call(arguments);return r.unshift(e),t[a].push(r),t[a]}};for(var i=0;i<t[a].methods.length;i++){var o=t[a].methods[i];t[a][o]=t[a].factory(o)};n=e.createElement(r),s=e.getElementsByTagName(r)[0],n.async=1,n.crossOrigin="anonymous",n.src=c,s.parentNode.insertBefore(n,s)}(window,document,"script","//cdn.js.customerlabs.co/cl1055pqcblp6p.js","_cl");_cl.SNIPPET_VERSION="1.0.0"
       `} 
      </Script>

      <DefaultSeo {...defaultSEO} />
      {getLayout(<Component {...pageProps} />)}
     
    </ChakraProvider>
  )
}


