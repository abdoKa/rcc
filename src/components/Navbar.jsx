import React from 'react';
import NavItems from "./NavItems";

const Navbar = ({logoSrc, alt,navItems}) => {
    return (
    <div className="navbar">
        <img src={logoSrc} alt={alt}/>
        <NavItems items={navItems}/>
    </div>
)
};

export default Navbar;