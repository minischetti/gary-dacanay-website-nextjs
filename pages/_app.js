import Head from 'next/head'
import '../styles/globals.css'
import {Analytics} from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width viewport-fit=cover" />
        </Head>
        <Component {...pageProps} />
        <Analytics/>
      </>
  )
}
