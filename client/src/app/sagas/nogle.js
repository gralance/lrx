import {
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';

import {
  GET_UNCHECK_NOGLES,
} from 'constants/NogleActionTypes';

import {
  setUnCheckNogles,
} from 'actions/NogleActions';

import {
    todosApiURL,
} from 'constants/apis';

import {
    getApi,
} from 'utils/api';

function* doGetUnCheckNogles() {
  const result = yield call(
    getApi,
    todosApiURL()
  );
  yield put(setUnCheckNogles(result));
}

export function* watchGetUnCheckNogles() {
  yield takeLatest(GET_UNCHECK_NOGLES, doGetUnCheckNogles);
}

export default {
  watchGetUnCheckNogles,
};
