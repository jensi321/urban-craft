import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PageBanner from '../PageBanner'
import Contact from '../Contact/Contact'
import Testimonial from '../Contact/Testimonial'
import OurTeam from '../About/OurTeam'

const ContactPage = () => {
  const Breadcrumb = [
    {
      title: 'Home',
    },
    {
      title: 'Contact Us',
    },
  ]

  return (
    <>
      <Header />
      <PageBanner value={Breadcrumb} />
      <Contact />
      <OurTeam />
      <Testimonial />
      <Footer />
    </>
  )
}

export default ContactPage