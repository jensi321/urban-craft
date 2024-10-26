import React, { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PageBanner from '../PageBanner'
import Blog from '../Blog/Blog'

const BlogPage = () => {
    const Breadcrumb = [
        {
          title: 'Home',
        },
        {
          title: 'Blog',
        },
      ]
      useEffect(() => {
      
    
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);})
  return (
    <>
        <Header/>
        <PageBanner value={Breadcrumb} />
        <Blog/>
        <Footer/>
    </>
  )
}

export default BlogPage