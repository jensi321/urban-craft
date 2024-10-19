import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import PageBanner from '../PageBanner'
import ProductDetails from '../ProductDetails/ProductDetails'
import ReletedProduct from '../ProductDetails/ReletedProduct'

const ProductDetailsPage = () => {
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
            title : 'Velvet amber sofa',

        }
      ]
  return (
    <>
        <Header/>
        <PageBanner value={Breadcrumb}/>
        <ProductDetails/>
        <ReletedProduct/>
        <Footer/>
    </>
  )
}

export default ProductDetailsPage
