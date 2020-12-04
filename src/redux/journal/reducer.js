import actions from './actions';
import { getToday } from '../../utils';

const initState = {
  emotion: 0,
  selectedDate: getToday(),
  content: '',
  lastSavedTime: '',
  cardId: 0,
};

function journalReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, emotion: action.payload.status };
    case actions.UPDATE_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload.selectedDate,
      };
    case actions.UPDATE_CARD_ID:
    case actions.UPDATE_STORAGE:
    case actions.UPDATE_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case actions.UPDATE_CONTENT:
      return { ...state, content: action.payload.content };
    default:
      return state;
  }
}

export default journalReducer;
