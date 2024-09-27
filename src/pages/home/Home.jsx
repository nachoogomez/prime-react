import React from 'react'
import './Home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Hero from '../../components/hero/Hero'
import Navigation from '../../components/nav/Navigation'

const Home = () => {
  return (
    <div className='home'>
        <Navigation/>
        <Hero/>
        <Sidebar/>  
    </div>
  )
}

export default Home