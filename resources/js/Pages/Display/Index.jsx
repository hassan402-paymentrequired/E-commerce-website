import React from 'react'
import guestLayout from '../Layout/GuestLayout'
import GuestNav from '../Components/GuestNav'
import HeroSection from '../Components/HeroSection'
import FeaturedProducts from '../Components/FeaturedProducts'

const Index = () => {
  return (
    <guestLayout>
        <GuestNav/>
        <HeroSection/>
        <FeaturedProducts/>

    </guestLayout>
  )
}

export default Index