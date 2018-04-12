import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { CounterListContainer } from './containers/CounterListContainer';
import { ActionBarContainer } from './containers/ActionBarContainer';
import { Reducer } from './reducers';

let store = createStore(Reducer);
class App extends Component {
    render() {
        return (
            <div>
            <CounterListContainer/>
            <ActionBarContainer/>
            </div>
        )
    }
}

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));