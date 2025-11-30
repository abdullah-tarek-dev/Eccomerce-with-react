import React from 'react'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Slider from '../Components/Slider'
import ProductsList from '../Components/ProductsList'
import Arrivals from './Arrivals'
import DressStyle from '../Components/DressStyle'
import HappyCustomers from '../Components/HappyCustomers'
import Latest from '../Components/Latest'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
   <Header/>
   <Nav/>
   <Hero/>
   <Slider/>
   <Arrivals/>
   <DressStyle/>
   <HappyCustomers/>
   <Latest/>
   <Footer/>
    </>

  )
}

export default Home