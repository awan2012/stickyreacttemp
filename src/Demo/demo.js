import React, { Component } from 'react';

class Demo extends Component {

    render() {
        return (
            <div className="row bg-light mb-5">
                <div className="container">
                    <h1 className="display-4 text-center mb-5 fontPD">Demo Lectures</h1>
                    <div className="row mb-3">
                        <div className="col-md-4 mb-3">
                            <div className="embed-responsive embed-responsive-16by9 cardshadow">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/9gTw2EDkaDQ" allowFullScreen title="HTML 5"></iframe>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="embed-responsive embed-responsive-16by9 cardshadow">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen title="CSS 3"></iframe>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="embed-responsive embed-responsive-16by9 cardshadow">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen title="JS"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-4 mb-3">
                            <div className="embed-responsive embed-responsive-16by9 cardshadow">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen title="jQuery"></iframe>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="embed-responsive embed-responsive-16by9 cardshadow">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen title="Angular"></iframe>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="embed-responsive embed-responsive-16by9 cardshadow">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen title="Angular 2"></iframe>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Demo;