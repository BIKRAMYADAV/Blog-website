import React from "react";
import '../styles.css'

const Navbar = () => {
 return (
<>
<div className="Navbar">
    <div className="logo"><h1>MyBlog</h1></div>
    <div className="links">
        
            <li className="items"> <a href="/">Home</a></li>
            <li className="items"> <a href="/add-blog">Add Blog</a></li>
            <li className="items"><a href="/about">About</a></li>
            <li className="items"><a href="/contact">Contact</a></li>
     
    </div>
    <div className="search-btn">
        <input type="text" placeholder="enter blog to search" />
        <button>search</button>
    </div>
</div>
</>

 )

}


export default Navbar;