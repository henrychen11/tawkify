import React from 'react';
import NavBar from './navbar';
import Banner from './banner';
import InputForm from './input_container';
import Photo from './photo';
import Results from './results';
import { Route, Switch } from 'react-router-dom';

export default class App extends React.Component {
    render(){
        return (
            <div>
            <NavBar />
            <Banner />
            <Switch>
                <Route path="/results" component={Results}/>
                <Route path="/photo" component={Photo}/>
                <Route path="/" component={InputForm}/>
            </Switch>
            </div>
        )
    }
}