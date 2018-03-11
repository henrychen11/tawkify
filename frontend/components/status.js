import React from 'react';

export default class Status extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
                <div className="status-container">
                    <div className="status-row">
                            <div className="line" />
                            <div className="bottom-box">
                                <div className="status-box">
                                    <div className={(this.props.page === 1) ? 'page-number-active' : 'page-number'}>1</div>
                                    <div className="page-desc">ABOUT YOURSELF</div>
                                </div>
                                <div className="status-box">
                                    <div className="page-number">2</div>
                                    <div className="page-desc">IDEAL PARTNER</div>
                                </div>
                                <div className="status-box">
                                    <div className={(this.props.page === 3) ? 'page-number-active' : 'page-number'}>3</div>
                                    <div className="page-desc">ADD PHOTOS</div>
                                </div>
                        </div>
                    </div>
                </div>
        )
    }
}