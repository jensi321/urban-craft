import React, { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PageBanner from '../PageBanner'
import Faq from '../Policy/Faq'

const FaqPage = () => {
    const Breadcrumb = [
        {
          title: 'Home',
        },
        {
          title: 'FAQ',
        },
      ]
      useEffect(() => {

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    })

  return (
    <>
        <Header/>
        <PageBanner value={Breadcrumb}/>
        <Faq/>
        <Footer/>
    </>
  )
}

export default FaqPage