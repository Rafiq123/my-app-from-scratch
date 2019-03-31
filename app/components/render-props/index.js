import React, { Component } from "react";

// The <Mouse> component encapsulates the behavior we need...
class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

                {/* ...but how do we render something other than a <p>? */}
                <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
                {this.props.render(this.state)}
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render= {function(state){
                    return (
                        <Cat mouse = {state} />
                    )
                }}/>
            </div>
        );
    }
}

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src="https://icon2.kisspng.com/20180129/wow/kisspng-chartreux-maine-coon-british-shorthair-european-sh-cat-5a6fd2403fd2c1.4774936315172777602614.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        );
    }
}

export default MouseTracker;