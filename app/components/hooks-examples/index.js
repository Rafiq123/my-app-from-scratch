import React, { Component } from 'react';

import Row from './row';

export default class User extends Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            firstName: "Rafiq",
            lastName: "Jamakhane",
            innerWidth : window.innerWidth
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount');
        document.title = `${this.state.firstName} ${this.state.lastName}`;
        document.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount = () => {
        console.log('componentWillUnmount');
        document.removeEventListener('resize', this.handleResize);
    }
    
    componentDidMount = () => {
        console.log('componentDidMount');
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('componentDidUpdate');
        document.title = `${this.state.firstName} ${this.state.lastName}`;
    }

    handleResize = () =>{
        this.setState({ innerWidth: window.innerWidth });
    }

    handleInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        console.log('render');
        return (
            <div>
                <Row>
                    <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleInputChange} />
                </Row>
                <Row>
                    <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleInputChange} />
                </Row>
            </div>
        )
    }
}