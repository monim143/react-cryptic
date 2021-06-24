import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './PageBanner.scss'

export const PageBanner = ({ title, activeCrumb }) => {
    return (
        <>
            <section className="pageBanner">
                <div className="container">
                    <div className="pageBanner-content pt-5">
                        <h1 className="banner-title mb-4 text-light">{title}</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"> <Link to="/">Home</Link></li>
                                <li className="breadcrumb-item text-light active" aria-current="page">{activeCrumb}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    )
}


/**
 * @package  - propTypes
 * @Activity - (props checked)
 */

PageBanner.propTypes = {
    title: PropTypes.string.isRequired,
    activeCrumb: PropTypes.string.isRequired,
};