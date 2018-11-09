import React, { Component } from 'react';
import Development from '../Development/development';
import imgp1 from '../styles/Images/profile1.jpg';
import imgp2 from '../styles/Images/profile2.jpg';

class About extends Component {

    render() {
        return (

            <div>
                <Development />
                <div className="container mt-3 pt-2 bg-light">
                    <div className="row ml-0 mr-0 mb-4 shadow">
                        <div className="col-md-12 bg-white pt-3 pl-3 pr-3">
                            <h4 className="text-center mt-5">- Our Mission -</h4>
                            <h5 className="text-center mt-4">To provide the Easy Learnings for You.</h5>
                            <h4 className="text-center mt-4">About</h4>
                            <p className="pl-5 pr-5 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                               when an unknown printer took a galley of type and scrambled it to make a type
                               specimen book. It has survived not only five centuries, but also the leap into
                               electronic typesetting, remaining essentially unchanged. It was popularised in
                               the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                               and more recently with desktop publishing software like Aldus PageMaker
                               including versions of Lorem Ipsum.
                               </p>
                            <p className="pl-5 pr-5 pb-5 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book.
                               </p>
                        </div>
                    </div>
                    <div className="row ml-0 mr-0 mb-4 shadow">

                        <div className="col-md-12 bg-white pb-5">
                            <h5 className="text-center pt-5 pb-5">Leadership</h5>
                            <div className="row">
                                <div className="col-md-4 text-center">
                                    <img src={imgp2} className="rounded-circle" height="100" width="100" />
                                    <h5 className="pt-1 mb-0">Jhon Doe</h5>
                                    <p className="profilep mb-2">Founder & CEO</p>
                                    <p className="pl-3 pr-3 text-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                    an unknown printer took a galley of type and scrambled it to make a type. </p>
                                                                       
                                </div>
                                <div className="col-md-4 text-center">
                                    <img src={imgp1} className="rounded-circle" height="100" width="100" />
                                    <h5 className="pt-1 mb-0">Ashly Astin</h5>
                                    <p className="profilep mb-2"> Co-Founder</p>
                                    <p className="pl-3 pr-3 text-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                    an unknown printer took a galley of type and scrambled it to make a type. </p>
                                                                       
                                </div>
                                <div className="col-md-4 text-center">
                                    <img src={imgp2} className="rounded-circle" height="100" width="100" />
                                    <h5 className="pt-1 mb-0">Harbor Smith</h5>
                                    <p className="profilep mb-2">Co-Founder & COO</p>
                                    <p className="pl-3 pr-3 text-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                    an unknown printer took a galley of type and scrambled it to make a type. </p>
                                                                       
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
export default About;