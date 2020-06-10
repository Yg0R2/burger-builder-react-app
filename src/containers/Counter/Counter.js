import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementHandler(1)} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementHandler(1)} />
                <CounterControl label="Add 5" clicked={() => this.props.onIncrementHandler(5)} />
                <CounterControl label="Subtract 5" clicked={() => this.props.onDecrementHandler(5)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementHandler: (amount = 1) => dispatch({type: 'INCREMENT', payload: {amount: amount}}),
        onDecrementHandler: (amount = 1) => dispatch({type: 'DECREMENT', payload: {amount: amount}})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);