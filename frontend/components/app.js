import React from 'react';
import NavBar from './navbar';
import Banner from './banner';
import InputForm from './input_form';
import Photo from './photo';
import Results from './results';
import Status from './status';
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