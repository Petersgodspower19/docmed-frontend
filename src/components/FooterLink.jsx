import React from 'react'
import { NavLink } from 'react-router-dom'

function FooterLink({to, children, onClick}) {
    return (
        <NavLink to={to} onClick={onClick} className="first-line:text-[15px] text-white hover:text-darkBlue">
          {children}
        </NavLink>
      )
}

export default FooterLink
