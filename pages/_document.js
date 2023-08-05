import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}/>
                    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js" crossOrigin={"true"}></script>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Lato:ital@0;1&family=Roboto:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Source+Sans+Pro:ital@0;1&display=swap"
                        rel="stylesheet"/>
                </Head>
                <body className="font-sans tracking-wide bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-300">
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument