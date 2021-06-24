import React, { useEffect } from 'react'
import { PageBanner } from '../components/PageBanner/PageBanner';
import Navigator from '../components/Navigator/Navigator'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'


const ContactUs = () => {

    // Component Did Mount
    useEffect(() => {
        document.title = 'Contact'
    }, []);

    return (
        <>
            <Navigator />
            <PageBanner title='Contact Us' activeCrumb='Contact Us' />
            <Contact />
            <Footer />
        </>
    )
}

export default ContactUs
