import * as actionTypes from '../actions';

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT: {
      return {
        counter: state.counter + action.payload.amount
      }
    }
    case actionTypes.DECREMENT: {
      return {
        counter: state.counter - action.payload.amount
      }
    }
    default:
  }

  return state;
};

export default counterReducer;
