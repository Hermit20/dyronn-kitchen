import React from 'react'
import { AboutUs,FindUs, Gallery, Header, Chef, Reviews, Laurels } from './container';

const Home = () => {
  return (
    <div>
        <Header />
        <AboutUs />
        <Gallery />
        <Chef />
        <Laurels />
        <FindUs />
        {/* <Footer /> */}
    </div>
  )
}

export default Home