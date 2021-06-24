import React, { useEffect } from 'react'
import { PageBanner } from '../components/PageBanner/PageBanner';
import Navigator from '../components/Navigator/Navigator'
import { DigitalCurrency, WhyChooseUs } from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const About = () => {

    // Component Did Mount
    useEffect(() => {
        document.title = 'About'
    }, []);

    return (
        <>

            <Navigator />
            <PageBanner title='About Us' activeCrumb='About Us' />
            <DigitalCurrency />
            <WhyChooseUs />
            <Contact />
            <Footer />
        </>
    )
}

export default About
