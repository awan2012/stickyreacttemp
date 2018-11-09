import React, { Component } from 'react';
//import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

import '../styles/styles.css';
import Header from '../Header/header';
import Hero from '../Hero/hero';
import HomePage from '../HomePage/homepage';
import Footer from '../Footer/footer';
import About from '../About/about';


require('../styles/site');

class Main extends Component {
    
    render() {
        return (
            <div className="container-fluid bg-light">
                <Header />
                <Hero />
                
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/homepage" component={HomePage} />
                         <Redirect from="/" to="/homepage" />
                    </Switch>
                
                <Footer />
            </div>
        )
    }
}

export default Main;