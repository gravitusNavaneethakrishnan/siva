import React from 'react'
import Homepage from './Homepage'
import Aboutpage from './Aboutpage';
import Servicepage from './Servicepage';
import Projectpage from './Projectpage';
import Contactpage from './Contactpage';
import Footer from './Footer';

const Index = () => {
  return (
    <>
      <div id='home'>
        <Homepage />
      </div>
      <div id='about'>
        <Aboutpage />
      </div>
      <div id='service'>
        <Servicepage />
      </div>
      <div id='project'>
        <Projectpage />
      </div>
      <div id='contact'>
        <Contactpage />
      </div>
      <Footer />
    </>
  )
}

export default Index;
