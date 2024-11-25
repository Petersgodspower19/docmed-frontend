import React from 'react'

function HeaderButton({children, onClick}) {
  return (
    <button className='bg-darkBlue text-white p-[5px] rounded-[5px]  text-[14px]' onClick={onClick}>
      {children}
    </button>
  )
}

export default HeaderButton
