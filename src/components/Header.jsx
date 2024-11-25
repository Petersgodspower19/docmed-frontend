import React, { useState } from 'react';
import { FaUserDoctor } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import Links from './Links';
import { IoMenuSharp } from 'react-icons/io5';
import HeaderButton from './HeaderButton';

function Header({ showForm }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className="flex items-center justify-between px-3 py-4 lg:px-16 
      lg:py-4 w-full fixed z-10 bg-white shadow-lg"
    >
      <NavLink to="/" className="flex items-center gap-1">
        <FaUserDoctor size={30} color="#000" className="logo" />
        <h1 className="font-bold text-[24px] text-black">DocMed</h1>
      </NavLink>

      <div className="hidden md:flex items-center gap-3">
        <Links to="/">Home</Links>
        <Links to="/blogs">Blogs</Links>
        <Links to="/contact">Contact</Links>
        <HeaderButton
          onClick={showForm}
        >
          Make an Appointment
        </HeaderButton>
      </div>

      <IoMenuSharp
        color="#000"
        size={40}
        className="md:hidden cursor-pointer"
        onClick={toggleMenu}
      />

      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:hidden absolute top-16 left-0 w-full bg-white text-black flex flex-col items-center gap-4 py-4 shadow-lg`}
      >
        <Links to="/" onClick={toggleMenu}>
          Home
        </Links>
        <Links to="/blogs" onClick={toggleMenu}>
          Blogs
        </Links>
        <Links to="/contact" onClick={toggleMenu}>
          Contact
        </Links>
        <HeaderButton onClick={() => {
            toggleMenu();
            showForm();
          }}>
          Make an Appointment
        </HeaderButton>
      </div>
    </header>
  );
}

export default Header;
