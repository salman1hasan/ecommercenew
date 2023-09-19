import React from "react"
import Container from "./Container"
import Logo from "./Logo"

const Header =() =>{
  return ( 
  <div className="bg-bodyColor h-20">
   <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
      <Logo/>
      <div>
        <input type='text' placeholder="Search for products" className="placeholder:text-sm flex-1 outline-none"/>
      </div>
    </Container>
   </div>
   );
};

export default Header;