import React from 'react'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Slider from '../Components/Slider'
import ProductsList from '../Components/ProductsList'
import Arrivals from './Arrivals'
import DressStyle from '../Components/DressStyle'
import HappyCustomers from '../Components/HappyCustomers'

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
    </>

  )
}

export default Home