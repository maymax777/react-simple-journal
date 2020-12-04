import actions from './actions';
import themes, { defaultTheme } from '../../components/common/Theme';

const initState = {
  currentTheme: { ...defaultTheme, ...themes },
};

function themeReducer(state = initState, action) {
  switch (action.type) {
    case actions.APPLY_THEME:
      return {
        ...state,
        currentTheme: { ...action.payload.theme, ...themes },
      };
    default:
      return state;
  }
}

export default themeReducer;
