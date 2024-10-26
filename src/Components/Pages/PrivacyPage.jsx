import React, { useEffect } from 'react'
import Header from '../Header'
import PageBanner from '../PageBanner'
import Footer from '../Footer'
import Privacy from '../Policy/Privacy'

const PrivacyPage = () => {
    const Breadcrumb = [
        {
          title: 'Home',
        },
        {
          title: 'Terms & Condition',
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
        <PageBanner value={Breadcrumb} />
        <Privacy/>
        <Footer/>
    </>
  )
}

export default PrivacyPage