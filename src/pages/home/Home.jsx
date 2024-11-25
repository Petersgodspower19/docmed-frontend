import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Depts from './Depts'
import Reviews from './Reviews'
import Doctors from './Doctors'

function Home() {
  return (
    <div>
      <Hero />
     <Services />
     <Depts />
     <Reviews />
     <Doctors />
    </div>
  )
}

export default Home
