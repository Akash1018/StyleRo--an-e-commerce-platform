import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import NavBar from '../components/NavBar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import {setNav} from '../components/NavBar'
import Announcement from '../components/Announcement'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Announcement />
      <Slider />
      <Categories/>
      <Products />
      {/* <Newsletter /> */}
      <Footer />
    </div>
  )
}

export default Home