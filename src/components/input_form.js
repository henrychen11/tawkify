import React from 'react';
import axios from 'axios';

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

    addUser(user){
        axios.post('https://tawkify-server.herokuapp.com/users', user)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    handleSubmit(){
        this.addUser(this.state);
        this.props.history.push('/photo');
    }

    render(){
        console.log('state', this.state);
        return (

            <form onSubmit={this.handleSubmit.bind(this)} className="form-main">
                <div className="row">
                    <div className="page-text">
                        <div className="page-heading">Tell us a bit about yourself</div>
                        <div className="page-subtext">Tell us a bit about yourself and who you’d like to meet. The more we know, the better. Be candid--this info is for our eyes only. Tawkify profiles and photos will forever be 100% confidential.</div>
                    </div>
                </div>
                <div className="row">
                    <div className="input-left">
                        <div className="label-container">
                            <label>YOUR GENDER<span className="indicator">*</span></label>
                        </div>
                        <select value={this.state.gender} onChange={this.handleUpdate('gender').bind(this)} id="gender" require>
                            <option></option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <div className="input-text">Select your gender</div>
                    </div>
                    <div className="input-right">
                        <div className="label-container">
                            <label>YOU ARE SEEKING<span className="indicator">*</span></label>
                        </div>
                        <select value={this.state.seeking} onChange={this.handleUpdate('seeking').bind(this)} id="seeking" require>
                            <option></option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Both</option>
                        </select>
                        <div className="input-text">Select the sexual orientation you're seeking</div>
                    </div>
                </div>
                <div className="row">
                    <div className="input-left">
                        <div className="label-container">
                        <label>LOCATION<span className="indicator">*</span></label>
                        </div>
                        <input value={this.state.location} onChange={this.handleUpdate('location').bind(this)} pattern="[0-9]{5}" id="location" type="text" require/>
                        <div className="input-text">Where are you located?</div>
                    </div>
                    <div className="input-right">
                        <div className="label-container">
                            <label>YOUR BIRTHDAY<span className="indicator">*</span></label>
                        </div>
                        <div className="date-container">
                            <input value={this.state.month} onChange={this.handleUpdate('month').bind(this)} id="birthday" placeholder="MM" pattern="[0-9]{2}" type="text" require/>
                            <input value={this.state.day} onChange={this.handleUpdate('day').bind(this)} id="birthday" placeholder="DD" pattern="[0-9]{2}" type="text" require/>
                            <input value={this.state.year} onChange={this.handleUpdate('year').bind(this)} id="birthday" placeholder="YYYY" pattern="[0-9]{4}" type="text" require/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="input-left">
                        <div className="label-container">
                        <label>YOUR HEIGHT<span className="indicator">*</span></label>
                        </div>
                        <select value={this.state.height} onChange={this.handleUpdate('height').bind(this)} id="height" require>
                            <option></option>
                            {this.renderHeight()}
                        </select>
                        <div className="input-text">What is your height?</div>
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
                        <textarea value={this.state.occupation} onChange={this.handleUpdate('occupation').bind(this)} id="occupation" type="text" />
                        <div className="input-text">What do you do?</div>
                    </div>
                    <div className="input-right">
                        <div className="label-container">
                            <label>INCOME<span className="indicator">*</span></label>
                        </div>
                        <select value={this.state.income} onChange={this.handleUpdate('income').bind(this)} id="seeking" require>
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
                        <div className="input-text">Why? This is one form of an indicator..</div>
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
                        <div className="input-text">Is income a factor in your match preferences?</div>
                    </div>
                    <div className="input-right">
                        <div className="label-container">
                            <label>INTERESTS</label>
                        </div>
                    <textarea onChange={this.handleUpdate('interests').bind(this)} value={this.state.interests} type="text" />
                    <div className="input-text">Tell us a little more about yourself and what you like to do. We read everything, so please share!</div>
                    </div>
                </div>
                <div className="button-container">
                    <button className="form-btn">SAVE AND CONTINUE</button>
                </div>
            </form>
        )
    }
}