import Head from 'next/head'
import Hero from '../components/hero'
import Servicios from '../components/servicios'

export default function Home() {
  return (
    <>
    <Head>
      <title>CLIA</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densityDpi=device-dpi"
      /> 
    </Head>
   
   <Hero/>
   
   <Servicios/>


    </>
  )
}
