import React from 'react'
import Header from '../components/Header'
import LandingPage from './LandingPage'
import Speakers from '../components/Speakers'
import About from '../components/About'
import Tickets from '../components/Tickets'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <LandingPage/>
        <Speakers/>
        <About/>
        <Tickets/>
        <Footer/>
    </div>
  )
}

export default Home