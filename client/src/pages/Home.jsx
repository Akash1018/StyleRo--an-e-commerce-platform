import Categories from '../components/Categories'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Announcement from '../components/Announcement'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Announcement />
      <Slider />
      <Categories/>
      <Products />
      <Footer />
    </div>
  )
}

export default Home