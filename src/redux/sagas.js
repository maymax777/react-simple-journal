import { all } from 'redux-saga/effects';
import journal from './journal/sagas';

function* rootSaga() {
  yield all([journal()]);
}

export default rootSaga;
