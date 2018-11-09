import React, { Component } from 'react';
import allimg from '../styles/Images/all.png';

class Sale extends Component {


    render() {
        return (
            <div>
                <div className="row herosection mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="jumbotron jumbotron-fluid pb-2">
                                    <h1 className="text-white">Courses on Discount</h1>
                                    <p className="lead text-white mt-3">More recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                                        Ipsum.
                            </p>
                                    <a href="#" className="btn btn-primary btn-lg mt-3">Order Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pr-5 mr-5 bg-light">
                    <div className="col-12 d-none d-lg-flex justify-content-end ">
                        <img src={allimg} className="img-fluid imghtml5" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Sale;