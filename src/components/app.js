import React from 'react';
import NavBar from './navbar';
import Banner from './banner';
import Input from './input';

export default class App extends React.Component {
    render(){
        return (
            <div className="">
                <NavBar />
                <Banner />
                <Input />
            </div>
        )
    }
}