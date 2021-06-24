import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import ContactUs from '../pages/Contact'
import Error404 from '../pages/Error404'

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={ContactUs} />
                <Route exact path="*" component={Error404} />
            </Switch>
        </>
    )
}

export default Routes