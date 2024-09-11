import React from 'react'
import guestLayout from '../Layout/GuestLayout'
import GuestNav from '../Components/GuestNav'
import HeroSection from '../Components/HeroSection'
import FeaturedProducts from '../Components/FeaturedProducts'
import Testimony from '../Components/Testimony'
import NewLetter from '../Components/NewLetter'
import Footer from '../Components/Footer'

const Index = () => {
  return (
    <guestLayout>
        <GuestNav/>
        <HeroSection/>
        <FeaturedProducts/>
        <Testimony/>
        <NewLetter/>
        <Footer/>
    </guestLayout>
  )
}

export default Index