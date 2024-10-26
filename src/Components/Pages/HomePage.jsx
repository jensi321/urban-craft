import React from 'react'
import Banner from '../Home/Banner'
import PopularSofa from '../Home/PopularSofa'
import Recently from '../Home/Recently'
import Services from '../Home/Services'
import SofaSet from '../Home/SofaSet'
import Footer from '../Footer'
import Header from '../Header'
import Scroll from '../Home/Scroll'
import NewsLetter from '../Home/NewsLetter'

const HomePage = () => {


  return (
    <>
      <Header />
      <NewsLetter/>
      <Banner />
      <Services />
      <SofaSet />
      <PopularSofa />
      <Scroll/>
      <Recently />
      <Footer />
    </>
  )
}

export default HomePage
