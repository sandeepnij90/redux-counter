const initState = {
    counters: [0,0,0]
};

import  { ADD_COUNTER, REMOVE_COUNTER }  from '../actions';

export const Reducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_COUNTER : {
            const { counters } = state;
            return {counters: [...counters, 0]};
        }

        case REMOVE_COUNTER :{
            const { counters } = state;
            counters.pop();
            return {counters: [...counters]}
        }

        default:
        return state;
    }
}