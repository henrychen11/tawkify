import React from 'react';

export default class Photo extends React.Component {
    constructor(props){
        super(props);
    }

    handleSubmit(){
        this.props.history.push('/results');
    }

    render(){
        console.log(this.state);
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="photo-main">
                <div className="page-text">
                    <div className="page-heading">Upload recent photos of yourself</div>
                    <div className="page-subtext">We ask that you upload at least 2 pictures of yourself; but upload as many as you'd like. We encourage
                        you to review your pictures periodically to make sure they are up to date. Snapshots and Selfies just
                        fine here. Remember this image is for our internal use and will not be shared with potential matches –
                        you will also be able to swap it out later if you wish.</div>
                </div>
                <div className="drag-drop-container">
                    <div className="picture-icon"><i className="fa fa-picture-o"></i></div>
                    <div className="photo-text">Drag and drop a photo</div>
                </div>
                <button className="photo-btn">CHOOSE FILE</button>
                <div>If you have problems with uploading your pictures, please contact us at (844) 494-7280 or support@tawkify.com.</div>
                <button className="form-btn">SAVE AND CONTINUE</button>
            </form>
        )
    }
}

