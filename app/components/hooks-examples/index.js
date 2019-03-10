import React, { Component } from 'react';

import Row from './row';

export default class User extends Component {
    constructor(props) {
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
        document.title = `${this.state.firstName} ${this.state.lastName}`;
        document.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount = () => {
        document.removeEventListener('resize', this.handleResize);
    }
    

    componentDidUpdate = (prevProps, prevState) => {
        document.title = `${this.state.firstName} ${this.state.lastName}`;
    }

    handleResize = () =>{
        this.setState({ innerWidth: window.innerWidth });
    }

    handleInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
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