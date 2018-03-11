import React from 'react';
import NavBar from './navbar';
import Banner from './banner';
import InputForm from './input_form_container';
import Photo from './photo_container';
import Results from './results_container';
import Status from './status_container';
import { Route, Switch } from 'react-router-dom';

export default class App extends React.Component {
    render(){
        return (
            <div>
            <NavBar />
            <Banner />
            <Status />
            <Switch>
                <Route path="/results" component={Results}/>
                <Route path="/photo" component={Photo}/>
                <Route path="/" component={InputForm}/>
            </Switch>
            </div>
        )
    }
}