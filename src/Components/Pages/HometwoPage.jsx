import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import BannerSlider from '../HomeTwo/BannerSlider'
import SofaSet from '../Home/SofaSet'
import About from '../HomeTwo/About'
import PopularSofa from '../Home/PopularSofa'
import NewsLetter from '../Home/NewsLetter'
import Team from '../HomeTwo/Team'
import Offer from '../HomeTwo/Offer'

const HometwoPage = () => {
  return (
    <>
      <Header />
      <NewsLetter />
      <BannerSlider />
      <SofaSet />
      <About />
      <PopularSofa />
      <Offer/>
      <Team />
      <Footer />
    </>
  )
}

export default HometwoPage