import { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

// グローバルのスタイル
const GlobalStyle = createGlobalStyle`
html,
body,
textares{
    padding:0;
    margin:0;
    font-family: -apple-system, BindMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fire Sans, Droid Sans, Helvetica Neue, sans-serif;
}

* {
    box-sizing:border-box;
}

a {
    cousor:pointer;
    text-decoration:none;
    transition:.25s;
    color:#000;
}

ol,ul {
    list-style:none;
}
`
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta key="charset" name="charset" charSet="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5"
        />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="wensite" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
