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
                        <img src="src/assets/logo.png" className="logo"/>
                    </div>
                    <div>How it Works</div>
                    <div>FAQ</div>
                    <div>Stories</div>
                    <div>Blog</div>
                </div>

                <div className="navbar-right">
                    <div>1 (888) 494-7280</div>
                    <div className="message">
                        <div>CLICK HERE FOR</div>
                        <div className="line"></div>
                        <div>FREE SCREENING</div>
                    </div>
                </div>
            </div>
        )
    }
}