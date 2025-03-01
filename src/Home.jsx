import React from 'react'
import { AboutUs,FindUs, Gallery, Header } from './container';

const Home = () => {
  return (
    <div>
        <Header />
        <AboutUs />
        <Gallery />
        <FindUs />
        {/* <Footer /> */}
    </div>
  )
}

export default Home