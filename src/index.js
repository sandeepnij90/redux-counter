import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    render() {
        return (
            <h1>App is running!</h1>
        )
    }
}

render(<App />, document.getElementById('root'));