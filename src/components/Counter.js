import React, { Component } from 'react';

export class Counter extends Component {

    constructor(props) {
        super(props);
        this.state= {
            value : 0
        }
        this.incrementCounterValue = this.incrementCounterValue.bind(this);
        this.decrementCounterValue = this.decrementCounterValue.bind(this);
    }

    incrementCounterValue(){
        this.setState({
            value: this.state.value + 1
        })
    }

    decrementCounterValue() {
        this.setState({
            value: this.state.value - 1
        })
    }

    render() {
        return(
            <div>
            <h3>{this.state.value}</h3>
            <button onClick={this.incrementCounterValue}>+</button>
            <button>-</button>
            </div>
        )
    }
}