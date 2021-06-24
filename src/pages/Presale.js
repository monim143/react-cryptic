import React, { useEffect } from 'react'
import { PageBanner } from '../components/PageBanner/PageBanner';
import Navigator from '../components/Navigator/Navigator'

const Contact = () => {

    // Component Did Mount
    useEffect(() => {
        document.title = 'Presale'
    }, []);

    return (
        <>
            <Navigator />
            <PageBanner title='Presale' activeCrumb='Presale' />
            <div className="container text-center pt-5">
                <h1 className="display-3">Hi , This Is -  <span className="text-success">Presale Page :)</span> </h1>
            </div>
        </>
    )
}

export default Contact
