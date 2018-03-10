import React from 'react';

export default class Banner extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        
        return (
            <div className="banner">
                    <div className="overlay">
                        <div className="banner-text"> 
                            We'd like to get to know you better. Tell us about yourself and the sort of someone you'd like to meet. Don't worry, no one will see this besides the matchmakers at Tawkify.
                        </div>
                    </div>
            </div>
        )
    }
}