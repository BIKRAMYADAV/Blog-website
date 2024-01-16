import React, { useEffect } from "react";
import BlogList from "../components/BlogList";
import { useState } from "react"
import '../styles.css'
import axios from 'axios';


const Home = ()=> {
const [blogs, setBlogs] = useState(
    []
);

useEffect(() => {
    const fetchBlog = async () => {
        try{
            const response = await axios.get('http://localhost:3000/api/getAll');
            console.log(response.data);
            setBlogs(response.data);
        } catch(error) {
            console.log(error);
        }
    };
    fetchBlog();
}, []);

const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog._id !== id);
    setBlogs(newBlogs);
}
    return (
   <>
  <BlogList blogs = {blogs} handleDelete={ handleDelete}/>
   </>
)

}

export default Home;