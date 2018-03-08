import React from 'react';

export default class InputForm extends React.Component {

    render(){

        return (

            <form className="form-main">
                <div className="row">
                    <div className="input-left">
                        <div className="label-container">
                        <label>YOUR GENDER<span className="indicator">*</span></label>
                        </div>
                        <select id="gender">
                            <option></option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="input-right">
                        <div className="label-container">
                            <label>YOU ARE SEEKING<span className="indicator">*</span></label>
                        </div>
                        <select id="seeking">
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
                        <input id="location" type="text" />
                    </div>
                    <div className="input-right">
                        <div className="label-container">
                            <label>YOUR BIRTHDAY<span className="indicator">*</span></label>
                        </div>
                        <input id="birthday" type="text" />
                        <input id="birthday" type="text" />
                        <input id="birthday" type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="input-left">
                        <div className="label-container">
                        <label>YOUR HEIGHT<span className="indicator">*</span></label>
                        </div>
                        <select id="gender">
                            <option></option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="input-right">
                        <div className="label-container">
                            <label>HEIGHT FACTOR<span className="indicator">*</span></label>
                        </div>
                        <button id="height-factor">Yes</button>
                        <button id="height-factor">No</button>
                    </div>
                </div>
                <div className="row">
                    <div className="input-left">
                        <div className="label-container">
                            <label>OCCUPATION<span className="indicator">*</span></label>
                        </div>
                        <input id="occupation" type="text"/>
                    </div>
                    <div className="input-right">
                        <div className="label-container">
                            <label>INCOME<span className="indicator">*</span></label>
                        </div>
                        <select id="seeking">
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
                        <label>income factor<span className="indicator">*</span></label>
                        </div>
                        <button id="income-factor">Yes</button>
                        <button id="income-factor">No</button>
                    </div>
                    <div className="input-right">
                        <div className="label-container">
                            <label>INTERESTS<span className="indicator">*</span></label>
                        </div>
                    <textarea type="text" />
                    </div>
                </div>
            </form>
        )
    }
}