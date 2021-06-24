import React, { useState } from 'react'
import './Presale.scss'
import presaleIGreenImg from '../../assets/images/d-green.png'
import presaleIRedImg from '../../assets/images/d-red.png'
import presaleIPurpleImg from '../../assets/images/d-purple.png'
import { AiFillStar } from 'react-icons/ai';


const Presale = () => {

    // eslint-disable-next-line no-unused-vars
    const [presale, setPresale] = useState([
        { presaleImgSrc: '', presaleTitle: 'Dxsale', presaleDateLeft: '68d Left', },
        { presaleImgSrc: '', presaleTitle: 'Dxpro', presaleDateLeft: '12d Left', },
        { presaleImgSrc: '', presaleTitle: 'Dxsale', presaleDateLeft: '68d Left', },
        { presaleImgSrc: '', presaleTitle: 'Dxpro', presaleDateLeft: '10d Left', },
        { presaleImgSrc: '', presaleTitle: 'Dxsale', presaleDateLeft: '150d Left', },
        { presaleImgSrc: '', presaleTitle: 'Dxpro', presaleDateLeft: '03d Left', },
    ]);

    return (
        <>
            <section className={'presale-listing section-padding'}>
                <div className="container">
                    <ul className="nav nav-pills justify-content-center mb-5" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link rounded-pill px-4 active" data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" aria-selected="true">
                                Active Presale
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link rounded-pill px-4" data-bs-toggle="pill" data-bs-target="#pills-2" type="button" role="tab" aria-selected="false">
                                Upcoming Presale
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link rounded-pill px-4" data-bs-toggle="pill" data-bs-target="#pills-3" type="button" role="tab" aria-selected="false">
                                Ended Presale
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-1" role="tabpanel">
                            <div className="row">
                                {
                                    presale.length ?
                                        presale.map((item, index) => {
                                            return (
                                                <div key={`${index}100`} className="col-lg-4 col-md-6">
                                                    <div className="listing-card card border-0 bg-white">
                                                        <div className="cardHead d-flex align-items-center mb-4">
                                                            <img src={presaleIGreenImg} className="img-fluid me-3" alt="logo" />
                                                            <h3 className="title mb-0">{item.presaleTitle}</h3>
                                                        </div>
                                                        <div className="cardBottom d-flex align-items-center justify-content-between">
                                                            <div className="starReviewShowup d-flex align-items-center">
                                                                <AiFillStar className="fs-3 text-warning" />
                                                                <AiFillStar className="fs-3 text-warning" />
                                                                <AiFillStar className="fs-3 text-warning" />
                                                                <AiFillStar className="fs-3 text-muted" />
                                                                <AiFillStar className="fs-3 text-muted" />
                                                            </div>
                                                            <span>{item.presaleDateLeft}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        : null
                                }
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-2" role="tabpanel">
                            <div className="row">
                                {
                                    presale.length ?
                                        presale.map((item, index) => {
                                            return (
                                                <div key={`${index}200`} className="col-lg-4 col-md-6">
                                                    <div className="listing-card card border-0 bg-white">
                                                        <div className="cardHead d-flex align-items-center mb-4">
                                                            <img src={presaleIRedImg} className="img-fluid me-3" alt="logo" />
                                                            <h3 className="title mb-0">{item.presaleTitle}</h3>
                                                        </div>
                                                        <div className="cardBottom d-flex align-items-center justify-content-between">
                                                            <div className="starReviewShowup d-flex align-items-center">
                                                                <AiFillStar className="fs-3 text-warning" />
                                                                <AiFillStar className="fs-3 text-warning" />
                                                                <AiFillStar className="fs-3 text-warning" />
                                                                <AiFillStar className="fs-3 text-muted" />
                                                                <AiFillStar className="fs-3 text-muted" />
                                                            </div>
                                                            <span>{item.presaleDateLeft}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        : null
                                }
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-3" role="tabpanel">
                            <div className="row">
                                {
                                    presale.length ?
                                        presale.map((item, index) => {
                                            return (
                                                <div key={`${index}300`} className="col-lg-4 col-md-6">
                                                    <div className="listing-card card border-0 bg-white">
                                                        <div className="cardHead d-flex align-items-center mb-4">
                                                            <img src={presaleIPurpleImg} className="img-fluid me-3" alt="logo" />
                                                            <h3 className="title mb-0">{item.presaleTitle}</h3>
                                                        </div>
                                                        <div className="cardBottom d-flex align-items-center justify-content-between">
                                                            <div className="starReviewShowup d-flex align-items-center">
                                                                <AiFillStar className="fs-3 text-warning" />
                                                                <AiFillStar className="fs-3 text-warning" />
                                                                <AiFillStar className="fs-3 text-warning" />
                                                                <AiFillStar className="fs-3 text-muted" />
                                                                <AiFillStar className="fs-3 text-muted" />
                                                            </div>
                                                            <span>{item.presaleDateLeft}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Presale;