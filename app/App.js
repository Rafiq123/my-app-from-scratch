import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import Header from './components/header';
import Posts from './components/posts';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Posts />
            </div>
        );

    }
}

export default App;