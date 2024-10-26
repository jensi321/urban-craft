import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Loader from './Components/Loader';
import Login from './Components/Login';
import CartPage from './Components/Pages/CartPage';
import MyOrderPage from './Components/Pages/MyOrderPage';
import MyWishListPage from './Components/Pages/MyWishListPage';
import ProductDetailsPage from './Components/Pages/ProductDetailsPage';
import ProductListPage from './Components/Pages/ProductListPage';
import ProfilePage from './Components/Pages/ProfilePage';
import Register from './Components/Register';
import ManagePaymentsPage from './Components/Pages/ManagePaymentsPage';
import ManageAddressPage from './Components/Pages/ManageAddressPage';
import SupportPage from './Components/Pages/SupportPage';
import ProductListTwoPage from './Components/Pages/ProductListTwoPage';
import ProductListThreePage from './Components/Pages/ProductListThreePage';
import ProductListFourePage from './Components/Pages/ProductListFourePage';
import ContactPage from './Components/Pages/ContactPage';
import BlogPage from './Components/Pages/BlogPage';
import BlogDetailsPage from './Components/Pages/BlogDetailsPage';
import ScrollTop from './Components/ScrollTop';
import AboutPage from './Components/Pages/AboutPage';
import PrivacyPage from './Components/Pages/PrivacyPage';
import FaqPage from './Components/Pages/FaqPage';
import HometwoPage from './Components/Pages/HometwoPage';
import HomePage from './Components/Pages/HomePage';
import FirstBannerPage from './Components/Pages/FirstBannerPage';

const ScrollTopWrapper = () => {
  const location = useLocation();
  
  // Define paths where ScrollTop should not be rendered
  const noScrollTopPaths = ['/login', '/register'];

  return (
    <>
      {/* Conditionally render ScrollTop based on the current path */}
      {!noScrollTopPaths.includes(location.pathname) && <ScrollTop />}
      <Routes>
        <Route path='/' element={<FirstBannerPage />} />
        <Route path='/home1' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/productlist' element={<ProductListPage />} />
        <Route path='/productdetails' element={<ProductDetailsPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/order' element={<MyOrderPage />} />
        <Route path='/wishlist' element={<MyWishListPage />} />
        <Route path='/payments' element={<ManagePaymentsPage />} />
        <Route path='/address' element={<ManageAddressPage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='/productlisttwo' element={<ProductListTwoPage />} />
        <Route path='/productlistthree' element={<ProductListThreePage />} />
        <Route path='/productlistfoure' element={<ProductListFourePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blogdetails' element={<BlogDetailsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/privacy' element={<PrivacyPage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/home2' element={<HometwoPage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Loader />
      <ScrollTopWrapper />
    </BrowserRouter>
  );
};

export default App;