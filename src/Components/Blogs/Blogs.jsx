
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddToBookmark,handleMarkedAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])



    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl text-center bg-red-400 p-2 m-2 w-1/2 mx-auto rounded-xl">Blogs:{blogs.length}</h1>

            {
                blogs.map(blog =>
                    <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToBookmark={handleAddToBookmark}
                        handleMarkedAsRead={handleMarkedAsRead}
                    ></Blog>
                )

            }


        </div>

    );
};
Blogs.propTypes={
    handleAddToBookmark:PropTypes.func,
    handleMarkedAsRead:PropTypes.func
}

export default Blogs;