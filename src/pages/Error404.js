import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Error404 extends Component {
    render() {
        return (
            <>
                <div className="error-404">
                    <div className="container">
                        <div className={'error-content text-center pt-5'}>
                            <h1 className="error-title display-1 text-danger">Oops!</h1>
                            <h4 className="error-sub-title display-4"> <span className="text-dark">404</span> - Page not fund</h4>
                            <p className="error-desc">
                                The page you are looking might have been removed had its name change or temporarily unavailable.
                            </p>
                            <Link to="/" className="btn btn-sm btn-primary rounded"> &#8592;  Back to home page</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Error404