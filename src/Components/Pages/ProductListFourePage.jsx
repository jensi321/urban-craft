import React from 'react'
import Header from '../Header'
import PageBanner from '../PageBanner'
import Footer from '../Footer'
import ProductListFoure from '../ProductListFoure/ProductListFoure'

const ProductListFourePage = () => {
    const Breadcrumb =[
        {
          title: 'Home',
        },
        {
          title: 'Shop',
          href: '',
        },
        {
          title: 'Sofa set',
          href: '',
        },
        {
            title : 'Fabric sofa',

        }
      ]
  return (
    <>
        <Header/>
        <PageBanner value={Breadcrumb}/>
        <ProductListFoure />  
        <Footer/>
    </>
  )
}

export default ProductListFourePage
