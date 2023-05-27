import React from 'react'
import Slider from '../components/Slider';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home
