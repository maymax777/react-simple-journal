import actions from './actions';

const initState = {
  list,
  loading,
  error
};

function dictionaryReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default dictionaryReducer;
