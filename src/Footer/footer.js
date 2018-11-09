import React, { Component } from 'react';
import logoimg from '../styles/Images/logo.png';

class Footer extends Component {

    render() {
        return (
            <div>
                <div className="row bg-dark text-white pl-5 pr-5 footerarea">
                    <div className="col-md-3">
                        <img src={logoimg} className="img-fluid mx-auto d-block mt-5" alt="" />
                        <h4 className="text-center">Company Name</h4>
                    </div>
                    <div className="col-md-3">
                        <h6 className=" mx-auto d-block mt-5">RECENT POSTS </h6>
                        <p>
                            <span className="text-white">></span> When is it the right time to sell your company?</p>
                        <p>
                            <span className="text-white">></span> Personal debt or company debt we explore your options</p>
                        <p>
                            <span className="text-white">></span> An interview with a so-called business angel</p>
                        <p>
                            <span className="text-white">></span> When is it the right time to sell your company?</p>
                    </div>
                    <div className="col-md-3">
                        <h6 className=" mx-auto d-block mt-5">SERVICES </h6>
                        <p>
                            <span className="text-white">></span> SMALL BUSINESS LOAN SERVICE</p>
                        <p>
                            <span className="text-white">></span> CREDIT RATING ADVANCE SERVICE</p>
                        <p>
                            <span className="text-white">></span> CROWD FUNDING SERVICE</p>
                    </div>
                    <div className="col-md-3">
                        <h6 className=" mx-auto d-block mt-5">LATEST </h6>
                        <p>
                            <i className="fa fa-twitter text-white"></i> @albruna_nl Thank you :) 323 hours ago</p>
                        <p>
                            <i className="fa fa-twitter text-white"></i> New Template is coming soon! Several new demos, highly requested new features that will enhance your
                    workflow and im… twitter.com/i/web/status/9…3 days ago</p>
                    </div>
                </div>
                <div className="row bg-primary">
                    <div className="col-md-12">
                        <footer className="bg-primary pt-2 pl-0 pr-0">

                            <div className="row ml-0 mr-0 pl-0 pr-0 pb-2 pt-2">
                                <div className="col-md-12 pt-2">
                                    <p className="text-white copyright"> &copy; Copyright 2017 - 2018 | Company Theme by
                                <a href="#" className="text-light">Company Name</a> | All Rights Reserved
                                <span className="float-right">
                                            <a href="#">
                                                <i className="fa fa-twitter text-white"></i>
                                            </a>
                                            <a href="#" className="ml-2 mr-2">
                                                <i className="fa fa-twitter text-white"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-twitter text-white"></i>
                                            </a>
                                        </span>
                                    </p>

                                </div>
                            </div>

                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;