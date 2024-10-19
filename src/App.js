import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loader from './Components/Loader'
import Login from './Components/Login'
import CartPage from './Components/Pages/CartPage'
import CategoryPage from './Components/Pages/CategoryPage'
import MyOrderPage from './Components/Pages/MyOrderPage'
import MyWishListPage from './Components/Pages/MyWishListPage'
import ProductDetailsPage from './Components/Pages/ProductDetailsPage'
import ProductListPage from './Components/Pages/ProductListPage'
import ProfilePage from './Components/Pages/ProfilePage'
import Register from './Components/Register'
import ManagePaymentsPage from './Components/Pages/ManagePaymentsPage'
import ManageAddressPage from './Components/Pages/ManageAddressPage'
import SupportPage from './Components/Pages/SupportPage'
import Errorpage from './Components/Pages/Errorpage'

const App = () => {

  return (
    <>

    <BrowserRouter>
    <Loader/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/category' element={<CategoryPage/>}/>
        <Route path='/productlist' element={<ProductListPage/>}/>
        <Route path='/productdetails' element={<ProductDetailsPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/order' element={<MyOrderPage/>}/>
        <Route path='/wishlist' element={<MyWishListPage/>}/>
        <Route path='/payments' element={<ManagePaymentsPage/>}/>
        <Route path='/address' element={<ManageAddressPage/>}/>
        <Route path='/support' element={<SupportPage/>}/>
        <Route path='*' element={<Errorpage/>} />


      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
