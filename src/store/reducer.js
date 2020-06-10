const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      const newState = Object.assign({}, state);

      newState.counter = state.counter + action.payload.amount;

      return newState;
    }
    case 'DECREMENT': {
      return {
        ...state,
        counter: state.counter - action.payload.amount
      }
    }
    case 'STORE_RESULT': {
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter})
      }
    }
    case 'DELETE_RESULT': {
      /*const updatedResults = [...state.results];
      updatedResults.splice(action.payload.resultId, 1);*/

      const updatedResults = state.results
        .filter(result => result.id !== action.payload.resultId);

      return {
        ...state,
        results: updatedResults
      }
    }
  }

  return state;
};

export default reducer;
