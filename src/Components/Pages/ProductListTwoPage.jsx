import React from 'react'
import Header from '../Header'
import PageBanner from '../PageBanner'
import Footer from '../Footer'
import ProductListTwo from '../ProductListTwo/ProductListTwo'

const ProductListTwoPage = () => {
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
        <ProductListTwo />  
        <Footer/>
    </>
  )
}

export default ProductListTwoPage