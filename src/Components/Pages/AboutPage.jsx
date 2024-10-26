import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import PageBanner from '../PageBanner'
import About from '../About/About'
import Testimonial from '../Contact/Testimonial'
import Serveices from '../About/Serveices'
 import OurTeam from '../About/OurTeam'

const AboutPage = () => {
    const Breadcrumb = [
        {
            title: 'Home',
        },
        {
            title:'About Us'
        }
    ]
  return (
    <>
         <Header />
         <PageBanner value={Breadcrumb}/>
         <About/>
         <Serveices/>
         <Testimonial/>
         <OurTeam/>
         <Footer/>
    </>
  )
}

export default AboutPage