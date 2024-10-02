import React from 'react'

const Logo = ({ spanClass, divClass }) => {
  return (
    <div className='flex px-3 items-center'> 
      <div className={`flex items-center font-semibold text-white leading-6 ${divClass}`}><span className={`font-semibold text-white px-1 ${spanClass}`}>Mushthaq </span> Ameen </div>
      <div className='text-white font-semibold text-lg px-1 border-r border-gray-500 pr-5'>Developer</div>
    </div>
  )
}

export default Logo