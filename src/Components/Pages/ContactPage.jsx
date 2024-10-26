import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PageBanner from '../PageBanner'
import Contact from '../Contact/Contact'
import Testimonial from '../Contact/Testimonial'
import Map from '../Contact/Map'

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
      <Testimonial />
      <Map />
      <Footer />
    </>
  )
}

export default ContactPage