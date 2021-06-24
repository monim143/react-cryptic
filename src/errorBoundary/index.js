import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true
        };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="container error-boundary text-center py-5">
                    <h1 className="display-3 mb-4">Something went wrong :)</h1>
                    <p className="fs-3 mb-1">Caught by  <span className="text-danger">Error Boundary</span> </p>
                    <p className="fs-6">Please Check Developer tools in your browser !! </p>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;