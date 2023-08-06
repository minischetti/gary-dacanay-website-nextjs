import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from "@vercel/analytics";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js" crossOrigin={"true"}></script>
                    <link
                        rel="stylesheet"/>
                </Head>
                <body className="font-sans tracking-wide">
                    <Main />
                    <NextScript />
                    <Analytics />
                </body>
            </Html>
        )
    }
}

export default MyDocument