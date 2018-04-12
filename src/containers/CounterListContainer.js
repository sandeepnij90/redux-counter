import { connect } from 'react-redux';
import { CounterList } from '../components/counterList';

const mapStateToProps = state => {
    return {
        counters: state.counters
    }
}

export const CounterListContainer = connect(mapStateToProps)(CounterList);