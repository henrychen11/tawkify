import React from 'react';
import _ from 'lodash';

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

    renderTable(users){
        let list = [];
        _.mapValues( this.state.data, (value) => {
            list.push(value);
        });
        return list;
    }

    renderUsers(user){
            return  ( 
                        <tr key={user.id}>
                            <td>{user.gender}</td>
                            <td>{user.seeking}</td>
                            <td>{user.location}</td>
                            <td>{user.month}</td>
                            <td>{user.day}</td>
                            <td>{user.year}</td>
                            <td>{user.height}</td>
                            <td>{(user.heightFactor) ? 'Yes' : 'No'}</td>
                            <td>{user.occupation}</td>
                            <td>{user.income}</td>
                            <td>{(user.incomeFactor) ? 'Yes' : 'No'}</td>
                            <td>{user.interests}</td>
                        </tr>
                    )
        }

    handleClick(){
        this.props.history.push('/');;
    }
    render(){
        if (this.state.isLoading){
            return <div>Loading</div>;
        } else {
            return (
                <div>
                <h1 className="results-heading">Users in Database</h1>
                <div className="results-container">
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-header">
                                <th>Gender</th>
                                <th>Seeking</th>
                                <th>Location</th>
                                <th>Month</th>
                                <th>Day</th>
                                <th>Year</th>
                                <th>Height</th>
                                <th>Height Factor</th>
                                <th>Occupation</th>
                                <th>Income</th>
                                <th>Income Factor</th>
                                <th>Interests</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable().map( (user) => this.renderUsers(user))} 
                        </tbody>
                    </table>
                    <button className="form-btn" onClick={this.handleClick.bind(this)}>GO TO HOME PAGE</button>
                </div>
                </div>
            )
        }

    }
}