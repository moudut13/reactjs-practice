import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Account from "./Pages/Account";
import Bootstrap from "./Bootstrap";
import Write from "./Pages/Write";
function MainComponent(){
    return(
        <>
            <Bootstrap/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/account" element={<Account />} />
                <Route path="/write" element={<Write />} />
            </Routes>
        </>
    );
}
export default MainComponent;