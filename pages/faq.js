import React from 'react'
import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Faqq from '../components/faq';
 const Faq = () => {
  return (
    <>
    <Head>
        <title>FAQ</title>
    </Head>
    <Navbar/>
    <Faqq/>
    <Footer/>
    </>
  )
}

export default Faq;

