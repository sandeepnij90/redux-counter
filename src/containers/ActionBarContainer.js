import { connect } from 'react-redux';
import { ActionBar } from '../components/ActionBar';
import { addCounter, removeCounter } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        addCounter: () => dispatch(addCounter()),
        removeCounter: () => dispatch(removeCounter())
    }
}

export const ActionBarContainer = connect(null,mapDispatchToProps)(ActionBar);