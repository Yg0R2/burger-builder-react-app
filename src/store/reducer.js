const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      counter: state.counter + action.payload.amount
    }
  }
  else if (action.type === 'DECREMENT') {
    return {
      ...state,
      counter: state.counter - action.payload.amount
    }
  }

  return state;
};

export default reducer;
