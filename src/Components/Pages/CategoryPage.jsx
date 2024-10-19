import React from 'react'
import Banner from '../Catagory/Banner'
import PopularSofa from '../Catagory/PopularSofa'
import Recently from '../Catagory/Recently'
import Services from '../Catagory/Services'
import SofaSet from '../Catagory/SofaSet'
import Footer from '../Footer'
import Header from '../Header'
import PageBanner from '../PageBanner'
import Scroll from '../Catagory/Scroll'

const CategoryPage = () => {


  const Breadcrumb = [
    {
      title: 'Home',
    },
    {
      title: 'Shop',
      href: '',
    },
    {
      title: 'Sofa set',
    },
  ]
  return (
    <>
      <Header />
      <PageBanner value={Breadcrumb} />
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

export default CategoryPage
