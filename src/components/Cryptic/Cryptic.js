import React from 'react'
import { Link } from 'react-router-dom'
import './Cryptic.scss'

export function CrypticContent({ content, style }) {
    return (
        <>
            <div className="cryptic-content">
                <h3 className="title mb-5" style={{ color: style.color }}>{content.title}</h3>
                <p className="sub-title mb-3" style={{ color: style.color }}> {content.subTitle} </p>
                <p className="sub-title mb-4" style={{ color: style.color }}> {content.subTitle} </p>
                <Link to="//" className="btn px-4 py-2 rounded-pill btn-cryptic bg-clr-green text-light"> Submit Presale </Link>
            </div>
        </>
    )
}

export function CrypticImage({ img }) {
    return (
        <>
            <div className="cryptic-img">
                <img src={img} alt="cryptic-img" className='img-fluid' />
            </div>
        </>
    )
}

