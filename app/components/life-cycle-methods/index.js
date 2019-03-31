import React, { Component } from 'react';

class Lifecycle extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : "Benz"
        }

        console.log('constructor called - set initial state')
    }

    componentDidMount = () => {
      console.log('componentDidMount() called -you can make API requests');
    }

    static getDerivedStateFromProps(props, state){
        console.log(props, state);
        console.log('getDerivedStateFromProps() called ');
    }

    render(){
        console.log('render called - render html');
        return (
            <div>
                I have {this.props.color} {this.state.name}.
            </div>
        )
    }
    
}

Lifecycle.defaultProps = {
    color : 'black'
};

export default Lifecycle;