import React, { Component } from 'react';

const Temp = (props) => {
    console.log('renders');
    return (
        <div> {props.val}</div>
    )
}

export default class Test extends Component {

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

    shouldComponentUpdate = (nextProps, nextState) => {
        return this.state.val === nextState.val ? false : true;
    }
    


    render() {
        return (
            <Temp val={this.state.val} ></Temp>
        );

    }
}
