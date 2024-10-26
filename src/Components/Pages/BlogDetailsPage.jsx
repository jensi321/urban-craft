import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PageBanner from '../PageBanner'
import BlogDetails from '../BlogDetails/BlogDetails'

const BlogDetailsPage = () => {
    const Breadcrumb = [
        {
            title: 'Home',
        },
        {
            title: 'Blog',
            href: '/blog',
        },
        {
            title:'Blog Details'
        }
    ]
    return (
        <>
            <Header />
            <PageBanner value={Breadcrumb}/>
            <BlogDetails/>
            <Footer />
        </>
    )
}

export default BlogDetailsPage