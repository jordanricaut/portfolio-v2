import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang='fr' style={{scrollBehavior:'smooth'}}>
      <Head>
        <link rel="icon" href="/logo.png" sizes="any" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}