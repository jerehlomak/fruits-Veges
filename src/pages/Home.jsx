import React from 'react'
import { Banner, BestSeller, Customers, Features, Footer, HeroHeader, Navbar, Service, Testimonial, Vegetables } from '../components'
import OrganicProducts from '../components/ProductItem/ProductItem'

const Home = () => {
  return (
    <>
        <Navbar />
        <HeroHeader />
        <Features />
        <OrganicProducts />
        <Service />
        <Vegetables />
        <Banner />
        <BestSeller />
        <Customers />
        <Testimonial />
        <Footer />
    </>
  )
}

export default Home