import React, { Component,PureComponent } from 'react';

const Temp = (props) => {
    console.log('renders');
    return (
        <div> {props.val}</div>
    )
}

export default class Test extends PureComponent {

    state = {
        val: 1
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState({
                val: 1
            });
        }, 2000)
    }
    


    render() {
        return (
            <Temp val={this.state.val} ></Temp>
        );

    }
}
