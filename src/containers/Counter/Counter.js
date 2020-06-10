import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementHandler(1)} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementHandler(1)} />
                <CounterControl label="Add 5" clicked={() => this.props.onIncrementHandler(5)} />
                <CounterControl label="Subtract 5" clicked={() => this.props.onDecrementHandler(5)} />

                <hr />

                <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
                <ul>
                    {
                        this.props.storedResults
                          .map(result => (
                            <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>
                                {result.value}
                            </li>
                          ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer.counter,
        storedResults: state.resultReducer.results
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementHandler: (amount = 1) => dispatch({type: actionTypes.INCREMENT, payload: {amount: amount}}),
        onDecrementHandler: (amount = 1) => dispatch({type: actionTypes.DECREMENT, payload: {amount: amount}}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, payload: {resultId: id}}),
        onStoreResult: (counter) => dispatch({type: actionTypes.STORE_RESULT, payload: {counter: counter}})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);