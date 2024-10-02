import React from 'react'
import Timeline from '../components/Timeline'

const Journey = () => {
  return (
    <div id='journey' className=''>
      <div className='text-center md:text-7xl text-4xl z-0 text-white font-bold md:pb-0 pb-6'>My Journey</div>
      <hr className='md:hidden mx-6 border border-white/10'/>
        <Timeline />
    </div>
  )
}

export default Journey