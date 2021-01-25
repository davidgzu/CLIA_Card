import Head from 'next/head'
import Hero from '../components/hero'
import Servicios from '../components/servicios'
import Consultoria from '../components/consultoria'
import Contacto from '../components/contacto'
import { Wrapper } from '../components/hero.styles'
import Footer from '../components/footer'
import Background from '../components/background'

export default function Home() {
  return (
    <>
    <Head>
      <title>CLIA</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densityDpi=device-dpi"
      /> 
    </Head>

   <Background/>
      <Wrapper>
        <Hero/>
        
        <Servicios/>

        <Consultoria/>

        <Contacto/>

        <a href="whatsapp://send?phone=+525517040299" className="float" target="_blank">
          <i className="fa fa-whatsapp my-float"></i>
        </a>  

        <Footer/>
        
      </Wrapper>
   
    </>
  )
}
