import Footer from 'components/Footer'
import Header from 'components/Header'
import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FindSposts -  Aluguel de Equipamentos Esportivos</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Aluguel de Equipamentos Esportivos"
        />
      </Head>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
export default App