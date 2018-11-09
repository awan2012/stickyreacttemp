import React, { Component } from 'react';

class Hero extends Component {
  
    render() {
        return (
            <div className="row herosection">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid text-center">
                    <h1 className="display-4 text-white">Learn Development with Us</h1>
                    <p className="lead text-white mt-3">the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        <br/> and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                        Ipsum.
                    </p>
                    <a href="#" className="btn btn-primary rounded-0 btn-lg mt-3 mb-4">Start Now</a>
                </div>
            </div>
        </div>
        )
    }
}
export default Hero;