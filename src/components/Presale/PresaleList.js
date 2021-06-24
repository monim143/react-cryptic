import React, { useState } from 'react'
import presaleIGreenImg from '../../assets/images/d-green.png'
// import presaleIRedImg from '../../assets/images/d-red.png'
// import presaleIPurpleImg from '../../assets/images/d-purple.png'
import { AiFillStar } from 'react-icons/ai';


const PresaleList = () => {
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
            <section className="presale-list section-padding">
                <div className="container">
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
            </section>
        </>
    )
}

export default PresaleList
