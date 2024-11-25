import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import Links from './Links';
import FooterLink from './FooterLink';
const year = new Date().getFullYear;


function Footer() {
  return (
    <footer className='bg-grey px-3 py-4 lg:px-16 lg:py-4 w-full'>
      <div className='flex flex-col md:flex-row justify-between items-start gap-8'>
      <div className='flex flex-col gap-2 w-[300px]'>
      <div className='flex items-center gap-1'>
      <NavLink to="/" className='flex items-center gap-1'>
     <FaUserDoctor size={30} color='#fff' className='logo' />
     <h1 className='font-bold text-[24px] text-white'>DocMed</h1>
    </NavLink>
      </div>
      <p className='text-white mb-5'>
            At our facility, we prioritize your well-being by providing world-class healthcare services,
            cutting-edge technology, and a team of dedicated professionals.
          </p>
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='font-bold text-[20px] text-white'>Navigations</h2>
        <ul className='flex flex-col gap-2'>
    <FooterLink to="/">Home</FooterLink>
    <FooterLink to="/blogs">Blogs</FooterLink>
    <FooterLink to="/contact">Contact</FooterLink>
        </ul>
      </div>

      <div className='flex flex-col gap-2 w-[300px]'>
      <h2 className='font-bold text-[20px] text-white'>Address</h2>
      <p className='text-white mb-5'>
            At our facility, we prioritize your well-being by providing world-class healthcare services,
            cutting-edge technology, and a team of dedicated professionals.
          </p>
      </div>

      </div>

      <p className='text-center text-white font-semibold mb-8'>&copy;{year} All rights reserved</p>
    </footer>
  )
}

export default Footer
