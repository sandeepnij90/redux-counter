import React, { Component } from 'react';
import { Counter } from './Counter';
import PropTypes from 'prop-types';

export const CounterList = ({counters}) => {
    return (
        counters.map((counter,index) => {
            return <Counter key={index}/>
        })
    )
};

CounterList.propTypes = {
    counters: PropTypes.array
}

CounterList.defaultProps = {
    counters: [0,0,0,0]
}