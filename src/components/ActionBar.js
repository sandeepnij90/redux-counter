
import React from 'react';

export const ActionBar = ({ addCounter, removeCounter }) => {
        return(
            <div>
            <hr/>
            <button onClick={addCounter}>add counter</button>
            <button onClick={removeCounter}>remove counter</button>
            </div>
        )
  
}