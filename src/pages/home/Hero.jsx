import React from 'react';
import HeaderButton from '../../components/HeaderButton';

function Hero() {
  return (
    <div
      className='hero bg-no-repeat bg-cover md:p-[4rem] min-h-[100vh] flex items-center gap-2' 
      id='hero'
    >
      <div className='md:w-[500px] p-[50px] text-start'>
        <h1 className='text-6xl font-bold leading-tight'>Health Care</h1> 
        <h3 className='text-4xl capitalize leading-relaxed'>For whole family</h3>
        <p className='leading-loose'>
          In Healthcare Sector, service excellence is the facility of the hospital as healthcare service provider to consistently.
        </p>
        <div className='leading-loose mt-4'>
        <HeaderButton>Check Our Services</HeaderButton>
        </div>
    </div>
    </div>
  );
}

export default Hero;
