import React from 'react';

export default class InputForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gender: '',
            seeking: '',
            location: '',
            month: '',
            day: '',
            year: '',
            height: '',
            heightFactor: false,
            occupation: '',
            income: '',
            incomeFactor: false,
            interests: ''
        }
    }

    renderHeight(){
        const result = [];
        for (let i=4; i<=7; i++){
            for (let j=0; j < 12; j++){
                result.push(<option key={i*Math.random()}>{i} ft {j} in</option>);
            }
        }
        return result;
    }

    handleUpdate(field) {
        return (event) => this.setState({
            [field]: event.target.value
        })
    }

    handleHeightTrue(e){
        e.preventDefault();
        this.setState({ heightFactor: true});
    }
    
    handleHeightFalse(e){
        e.preventDefault();
        this.setState({ heightFactor: false});
    }

    handleIncomeTrue(e){
        e.preventDefault();
        this.setState({ incomeFactor: true});
    }
    
    handleIncomeFalse(e){
        e.preventDefault();
        this.setState({ incomeFactor: false});
    }
    

    render(){
        console.log(this.state);
        return (

            <form className="form-main">
                <div className="row">
                    <div>Tell us a bit about yourself</div>
                    <div>Tell us a bit about yourself and who you’d like to meet. The more we know, the better. Be candid--this info is for our eyes only. Tawkify profiles and photos will forever be 100% confidential.</div>
                </div>
                <div className="row">
                    <div className="input-left">
                        <div className="label-container">
                        <label>YOUR GENDER<span className="indicator">*</span></label>
                        </div>
                        <select value={this.state.gender} onChange={this.handleUpdate('gender').bind(this)} id="gender" required>
                            <option></option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="input-right">
                        <div className="label-container">
                            <label>YOU ARE SEEKING<span className="indicator">*</span></label>
                        </div>
                        <select value={this.state.seeking} onChange={this.handleUpdate('seeking').bind(this)} id="seeking" required>
                            <option></option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Both</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-left">
                        <div className="label-container">
                        <label>LOCATION<span className="indicator">*</span></label>
                        </div>
                        <input value={this.state.location} onChange={this.handleUpdate('location').bind(this)} pattern="[0-9]{5}" id="location" type="text" required/>
                    </div>
                    <div className="input-right">
                        <div className="label-container">
                            <label>YOUR BIRTHDAY<span className="indicator">*</span></label>
                        </div>
                        <div className="date-container">
                            <input value={this.state.month} onChange={this.handleUpdate('month').bind(this)} id="birthday" placeholder="MM" pattern="[0-9]{2}" type="text" required/>
                            <input value={this.state.day} onChange={this.handleUpdate('day').bind(this)} id="birthday" placeholder="DD" pattern="[0-9]{2}" type="text" required/>
                            <input value={this.state.year} onChange={this.handleUpdate('year').bind(this)} id="birthday" placeholder="YYYY" pattern="[0-9]{4}" type="text" required/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="input-left">
                        <div className="label-container">
                        <label>YOUR HEIGHT<span className="indicator">*</span></label>
                        </div>
                        <select value={this.state.height} onChange={this.handleUpdate('height').bind(this)} id="height" required>
                            <option></option>
                            {this.renderHeight()}
                        </select>
                    </div>
                    <div className="input-right">
                        <div className="label-container">
                            <label>HEIGHT FACTOR<span className="indicator">*</span></label>
                        </div>
                        <div className="button-container">
                        <button 
                            className={(this.state.heightFactor) ? 'option-btn-active' : 'option-btn'} 
                            onClick={this.handleHeightTrue.bind(this)}
                            onChange={this.handleUpdate('heightFactor').bind(this)}
                            id="height-factor">Yes</button>
                        <button 
                            className={(this.state.heightFactor) ? 'option-btn' : 'option-btn-active'} 
                            onClick={this.handleHeightFalse.bind(this)}
                            onChange={this.handleUpdate('heightFactor').bind(this)}
                            id="height-factor">No</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="input-left">
                        <div className="label-container">
                            <label>OCCUPATION</label>
                        </div>
                        <textarea value={this.state.occupation} id="occupation" type="text" />
                        <div className="input-text">What do you do?</div>
                    </div>
                    <div className="input-right">
                        <div className="label-container">
                            <label>INCOME<span className="indicator">*</span></label>
                        </div>
                        <select value={this.state.income} onChange={this.handleUpdate('income').bind(this)} id="seeking" required>
                            <option></option>
                            <option>Less than $40,000</option>
                            <option>$40,000-$60,000</option>
                            <option>$60,000-$80,000</option>
                            <option>$80,000-$100,000</option>
                            <option>$100,000-$125,000</option>
                            <option>$125,000-$150,000</option>
                            <option>$150,000-$200,000</option>
                            <option>$200,000-$250,000</option>
                            <option>$250,000-500,000</option>
                            <option>$500,000-$1,000,000</option>
                            <option>Rather not say</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-left">
                        <div className="label-container">
                        <label>income factor<span className="indicator">*</span></label>
                        </div>
                        <div className="button-container">
                        <button 
                            className={(this.state.incomeFactor) ? 'option-btn-active' : 'option-btn'} 
                            onClick={this.handleIncomeTrue.bind(this)}
                            onChange={this.handleUpdate('incomeFactor').bind(this)}
                            id="income-factor">Yes</button>
                        <button 
                            className={(this.state.incomeFactor) ? 'option-btn' : 'option-btn-active'} 
                            onClick={this.handleIncomeFalse.bind(this)}
                            onChange={this.handleUpdate('incomeFactor').bind(this)}
                            id="income-factor">No</button>
                        </div>
                    </div>
                    <div className="input-right">
                        <div className="label-container">
                            <label>INTERESTS</label>
                        </div>
                    <textarea onChange={this.handleUpdate('interests').bind(this)} value={this.state.interests} type="text" />
                    </div>
                </div>
                <div className="button-container">
                    <button className="form-btn">SAVE AND CONTINUE</button>
                </div>
            </form>
        )
    }
}