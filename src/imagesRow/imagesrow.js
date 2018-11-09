import React, { Component } from 'react';
import htmlimg from '../styles/Images/html.jpg';
import cssimg from '../styles/Images/css.svg';
import jsimg from '../styles/Images/js.png';
import jqueryimg from '../styles/Images/jquery.png';
import angularimg from '../styles/Images/angular.jpg';

class ImagesRow extends Component {
   
    render() {
        return (
            <div className="row mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="card cardshadow rounded-0">
                            <img className="card-img-top rounded-0" src={htmlimg} alt="" />

                            <div className="card-body rounded-0 text-center">
                                <h5 className="card-title rounded-0">HTML5</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card cardshadow rounded-0">
                                    <img className="card-img-top rounded-0" src={cssimg} alt="" />

                                    <div className="card-body">

                                        <h5 className="card-title text-center">CSS3</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card cardshadow rounded-0">
                                    <img className="card-img-top rounded-0" src={jsimg} alt="" />
                                    <div className="card-body rounded-0">
                                        <h5 className="card-title tex-center rounded-0">JavaScript</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-md-6">
                                <div className="card cardshadow rounded-0">
                                    <img className="card-img-top rounded-0" src={jqueryimg} alt="" />
                                    <div className="card-body rounded-0">
                                        <h5 className="card-title text-center rounded-0">jQuery</h5>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card cardshadow rounded-0">
                                    <img className="card-img-top rounded-0" src={angularimg} alt="" />
                                    <div className="card-body rounded-0">
                                        <h5 className="card-title text-center rounded-0">Angular 2</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default ImagesRow;