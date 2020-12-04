import { all, call, put, takeEvery } from 'redux-saga/effects';
import actions from './actions';
import themeActions from '../theme/actions';
import themes from '../../components/common/Theme';
import { saveJournalDataToStorage } from '../../utils';

export function* UPDATE_THEME({ payload }) {
  const status = payload.status || payload.emotion;
  const theme = themes[status];

  yield put({
    type: themeActions.APPLY_THEME,
    payload: { theme },
  });
}

export function* UPDATE_STORAGE({ payload }) {
  const { selectedDate, content, emotion } = payload;
  yield call(saveJournalDataToStorage, { selectedDate, content, emotion });
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.SET_STATE, UPDATE_THEME),
    takeEvery(actions.UPDATE_DATA, UPDATE_THEME),
    takeEvery(actions.UPDATE_STORAGE, UPDATE_STORAGE),
  ]);
}
