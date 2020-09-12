import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="google-site-verification"
            content="qvnPBc-DtgslFEsKMFY1QE4tgrKgYYFmuOuSM-M3wqU"
          />
          <meta
            name="description"
            content="Freelance Fullstack Student Developer"
          />
          <meta name="theme-color" content="#1E2533" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
