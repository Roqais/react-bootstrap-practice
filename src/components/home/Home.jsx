import React from 'react'
import HeroSection from './Hero section/HeroSection'
import Client from './Hero section/Client'
import Community from './Hero section/Community'
import Unlock from '../body/Unlock'
import Achievements from '../body/Achievements'

const Home = () => {
    return (
        <>
            <HeroSection />

            <Client />

            <Community />

            <Unlock />

            <Achievements />
        </>
    )
}

export default Home