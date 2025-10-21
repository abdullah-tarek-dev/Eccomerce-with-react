import React from 'react'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Slider from '../Components/Slider'
import ProductsList from '../Components/ProductsList'
import Arrivals from './Arrivals'

function Home() {
  return (
    <>
   <Header/>
   <Nav/>
   <Hero/>
   <Slider/>
   <Arrivals/>
    </>

  )
}

export default Home