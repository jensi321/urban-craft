import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import PageBanner from '../PageBanner'
import ProductList from '../ProductList/ProductList'

const ProductListPage = () => {
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
        <ProductList />  
        <Footer/>
    </>
  )
}

export default ProductListPage
