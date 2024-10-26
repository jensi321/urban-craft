import React from 'react'
import Header from '../Header'
import PageBanner from '../PageBanner'
import Footer from '../Footer'
import ProductListThree from '../ProductListThree/ProductListThree'

const ProductListThreePage = () => {
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
        <ProductListThree />  
        <Footer/>
    </>
  )
}

export default ProductListThreePage