import React, { useEffect } from 'react'
import BlogSidebar from './BlogSidebar'
import BlogList from './BlogList'

const BlogPagination = () => {
    useEffect(() => {
    
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);})
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex justify-center">
                    <div className="mx-auto flex w-full max-w-6xl items-start justify-center gap-6 lg:flex-row flex-col xl:px-0 px-5">
                            <BlogSidebar/>

                            <BlogList itemsPerPage={6}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPagination