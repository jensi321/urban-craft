import React from 'react'
import Cart from '../Cart/Cart'
import Footer from '../Footer'
import Header from '../Header'
import PageBanner from '../PageBanner'

const CartPage = () => {
  const Breadcrumb =[
    {
      title: 'Home',
    },
    {
        title : 'Cart',

    }
  ]
  return (
    <>
      <Header />
      <PageBanner value={Breadcrumb} />
      <Cart/>
      <Footer />
    </>
  )
}

export default CartPage
