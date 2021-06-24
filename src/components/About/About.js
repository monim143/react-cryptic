
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { CrypticImage, CrypticContent } from '../Cryptic/Cryptic'
import carouselImg1 from '../../assets/images/carousel-1.png';
import carouselImg2 from '../../assets/images/carousel-1.png';
import coinOffer from '../../assets/images/coinOffer.png';
import DigitalCurrencyImg from '../../assets/images/digital-currency.png';

export const AboutUs = () => {

    const [content, setContent] = useState({
        title: 'About Us',
        subTitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.',
    });

    return (
        <>
            <section className='about-us bg-clr-deep-blue section-padding'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <CrypticImage img={carouselImg1} />
                        </div>
                        <div className="col-lg-6">
                            <CrypticContent content={content} style={{ color: '#f5f5f5' }} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export const AboutCryptic = () => {

    const [content, setContent] = useState({
        title: 'Cryptic',
        subTitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.',
    });

    return (
        <>
            <section className='about-cryptic bg-light section-padding'>
                <div className="container">
                    <div className="row align-items-center gx-xxl-5">
                        <div className="col-lg-6">
                            <CrypticContent content={content} style={{ color: '#222' }} />
                        </div>
                        <div className="col-lg-6">
                            <CrypticImage img={carouselImg2} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export const DigitalCurrency = () => {

    const [content, setContent] = useState({
        title: 'Digital currency pre-sales',
        subTitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.',
    });

    return (
        <>
            <section className='about-cryptic bg-white section-padding'>
                <div className="container">
                    <div className="row align-items-center gx-xxl-5">
                        <div className="col-lg-6">
                            <CrypticContent content={content} style={{ color: '#222' }} />
                        </div>
                        <div className="col-lg-6">
                            <CrypticImage img={DigitalCurrencyImg} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export const WhyChooseUs = () => {

    const [content, setContent] = useState({
        title: 'Why Choose Us',
        subTitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.',
    });

    return (
        <>
            <section className='about-cryptic bg-clr-deep-blue section-padding'>
                <div className="container">
                    <div className="row align-items-center gx-xxl-5">
                        <div className="col-lg-6">
                            <CrypticImage img={carouselImg1} />
                        </div>
                        <div className="col-lg-6">
                            <CrypticContent content={content} style={{ color: '#fff' }} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export const CoinOffer = () => {

    const [content, setContent] = useState({
        title: 'The world’s first directory listing initial coin offering',
        subTitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor dolore magna aliquyam erat, sed diam voluptua.',
    });

    return (
        <>
            <section className='coin-offer bg-clr-deep-blue section-padding' style={{backgroundImage : `url(${coinOffer})`}}>
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-xl-8 offset-xl-2">
                            <CrypticContent content={content} style={{ color: '#fff' }} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

