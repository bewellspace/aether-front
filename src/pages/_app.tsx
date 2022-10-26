import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import theme from 'src/theme'
import { GlobalStyles } from 'src/components/GlobalStyles'
import Header from 'src/components/Layout/Header'
import Footer from 'src/components/Layout/Footer'
import 'src/components/RoadMap/css/antMotionStyle.css';
import '../style.css'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Aether</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <GlobalStyles />
        <Header navbarOpened={false} toggleNavbar={console.log} />
        <Component {...pageProps} />
        <Footer />
      </MantineProvider>
    </>
  )
}
