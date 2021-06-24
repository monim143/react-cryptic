import React, { useEffect } from 'react'
import Carousel from '../components/Carousel/Carousel'
import Presale from '../components/Presale/Presale'
import Navigator from '../components/Navigator/Navigator'
import OperaHouse from '../components/OperaHouse/OperaHouse'
import { AboutUs, AboutCryptic, CoinOffer } from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {

    // Component Did Mount
    useEffect(() => {
        document.title = 'Home'
    }, []);

    return (
        <>
            <Navigator />
            <Carousel />
            <Presale />
            <OperaHouse />
            <AboutUs />
            <AboutCryptic />
            <CoinOffer />
            <Contact />
            <Footer />
        </>
    )
}

export default Home