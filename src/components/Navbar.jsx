import React from "react";
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import Hero from "./hero";



function Navbar(){

    return (
      <div>
         <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md text-black p-4 flex items-center justify-between">
       
  <div className="flex items-center gap-2">
    <img src={logo} alt="" />
    <h2 className="text-2xl font-bold">Kappal</h2>
  </div>

  <div className="gap-8 flex">
    <Link to="/" className="relative font-bold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF5400] after:transition-all hover:after:w-full">
      Home
    </Link>

    <Link to="/about" className="relative font-bold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF5400] after:transition-all hover:after:w-full">
      About
    </Link>

    <Link to="/services" className="relative font-bold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF5400] after:transition-all hover:after:w-full">
      Services
    </Link>

    <Link to="/blog" className="relative font-bold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF5400] after:transition-all hover:after:w-full">
      Blog
    </Link>

    <Link to="/contact" className="relative font-bold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF5400] after:transition-all hover:after:w-full">
      Contact
    </Link>
  </div>

  <button className="bg-[#FF5400] text-white px-6 py-2 rounded-lg shadow-md hover:shadow-orange-500/50 hover:shadow-lg transition cursor-pointer">
    Login
  </button>

</nav>
     <Hero/>
      </div>
    
    

    );
}
export default Navbar