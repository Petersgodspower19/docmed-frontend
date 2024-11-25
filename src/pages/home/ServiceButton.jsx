import React from 'react'

function ServiceButton({children}) {
  return (
    <button className='bg-inherit border-white border-2 p-[5px] rounded-[5px]'>
      {children}
    </button>
  )
}

export default ServiceButton
