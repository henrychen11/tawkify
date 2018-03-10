import React from 'react';

export default class NavBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        
        return (
            <div className="navbar">
                <div className="navbar-left">
                    <div className="logo-container">
                        <img src="frontend/assets/logo.png" className="logo"/>
                    </div>
                    <div>How it Works</div>
                    <div>FAQ</div>
                    <div>Stories</div>
                    <div>Blog</div>
                </div>

                <div className="navbar-right">
                    <div className="phone-number">1 (888) 494-7280</div>
                    <div className="message">
                        <div>Chat with a love expert</div>
                        <div className="message-line"></div>
                        <div className="message-left">
                            <i className="fa fa-phone" style={{ fontSize: "14px" }}/>
                            <div className="message-right">
                                <div>CLICK HERE FOR</div>
                                <div>FREE SCREENING</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}