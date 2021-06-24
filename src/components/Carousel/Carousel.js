import React, { Component } from 'react'
import './Carousel.scss'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Link } from 'react-router-dom';
import 'pure-react-carousel/dist/react-carousel.es.css';
import carouselImg1 from '../../assets/images/carousel-1.png';
import carouselImg2 from '../../assets/images/carousel-1.png';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carouselItems: [
                {
                    title: 'First Directory Listing Initial Coin Offering',
                    subTitle: 'The world’s',
                    description: 'Duis aute irure dolor in reprehenderit in volup velit esse cillum dolore eu fugiat nulla.',
                    imgSource: carouselImg1
                },
                {
                    title: 'First Directory Listing Initial Coin Offering',
                    subTitle: 'The world’s',
                    description: 'Duis aute irure dolor in reprehenderit in volup velit esse cillum dolore eu fugiat nulla.',
                    imgSource: carouselImg2
                },
            ]
        }
    }

    render() {
        const carouselItems = this.state.carouselItems;
        return (
            <>
                <CarouselProvider
                    id={'carousel'}
                    naturalSlideWidth={100}
                    isIntrinsicHeight={true}
                    infinite={true}
                    totalSlides={carouselItems.length}
                    interval={4000}
                    isPlaying={true}
                >
                    <Slider>
                        {
                            carouselItems.length ?
                                carouselItems.map((item, index) => {
                                    return (
                                        <Slide index={index} key={index}>
                                            <div className="container">
                                                <div className="row text-white gx-xxl-5 align-items-center carousel-height">
                                                    <div className="col-xl-6">
                                                        <div className="carousel-content">
                                                            <h4 className="carousel-sub-title mb-3 fs-4">{item.subTitle}</h4>
                                                            <h2 className="carousel-sub-title mb-4 fw-bold display-4">{item.title} </h2>
                                                            <p className="carousel-desc fs-5 lh-base mb-4"> {item.description} </p>
                                                            <Link to="//" className="btn px-4 py-2 rounded-pill btn-cryptic bg-clr-green text-light"> View Coin </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="carousel-img">
                                                            <img src={item.imgSource} alt="logo" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    )
                                })
                                : null
                        }
                    </Slider>
                    <ButtonBack className="carousel-control" id={'carousel-back'}>
                        <FaChevronLeft />
                    </ButtonBack>
                    <ButtonNext className="carousel-control" id={'carousel-next'}>
                        <FaChevronRight />
                    </ButtonNext>
                </CarouselProvider>
            </>
        )
    }
}

export default Carousel