import React from 'react'
import { NavLink } from 'react-router-dom'

function Links({to, children, onClick}) {
  return (
    <NavLink to={to} onClick={onClick} className="first-line:text-[15px] text-black hover:text-darkBlue">
      {children}
    </NavLink>
  )
}

export default Links
