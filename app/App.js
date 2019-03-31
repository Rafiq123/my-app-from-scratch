import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import Header from './components/header';
import Posts from './components/posts';

import HooksExample from './components/hooks-examples';
import Hook from './components/hooks-examples/hooks-fn';

import Test from './components/pure-components/regular-component';
import Pure from './components/pure-components/pure-component'

import Username from './components/use-hoc/user';

import Locations from './components/Location';

import Lifecycle from './components/life-cycle-methods';

import MouseTracker from './components/render-props'

class App extends Component {
    
    render() {
        return (
            <div className="App">
                {/* <Header /> */}
                {/* <Posts /> */}
                {/* <HooksExample /> */}
                {/* <hr />
                <Hook /> */}
                {/* <Test />
                <Pure /> */}

                {/* <Username >Rafiq</Username> */}

                {/* <Locations/> */}
                {/* <Lifecycle/> */}
                <MouseTracker />
            </div>
        );

    }
}

export default App;