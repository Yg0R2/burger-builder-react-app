import * as actionTypes from '../actions';

const initialState = {
  results: []
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT: {
      return {
        results: state.results.concat({id: new Date(), value: action.payload.counter})
      }
    }
    case actionTypes.DELETE_RESULT: {
      const updatedResults = state.results
        .filter(result => result.id !== action.payload.resultId);

      return {
        results: updatedResults
      }
    }
    default:
  }

  return state;
};

export default resultReducer;
