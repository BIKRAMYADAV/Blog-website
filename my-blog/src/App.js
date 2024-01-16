import React from "react";
import './app.css'
import Home from './pages/home.js'
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Add from './pages/add.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (

<BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={
       <Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path = "/add-blog" element = {<Add />} />
          </Route>
        </Routes>
      </BrowserRouter>




  );
}

export default App;
