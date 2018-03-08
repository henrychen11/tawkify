import React from 'react';

export default class Results extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
            isLoading: true,
        };
    }

    componentDidMount(){
        console.log('inside results')
        const self = this;
        fetch('https://tawkify-server.herokuapp.com/users')
            .then(function(resp) { return resp.json(); })
            .then(function(data) {
            self.setState({ data: data, isLoading: false }) });
            
    }


    render(){
        console.log('render', this.state.data)
        let display;
        if (this.state.isLoading){
            display = <div>Loading</div>
        } else {
            display = <div>data</div>
        }

        return (
            <div>Here are results
                {display}
            </div>
        )
    }
}