import {
  watchGetTodos,
  watchCreateTodo,
} from './todo';

import {
  watchGetUnCheckNogles,
} from './nogle';

export default function* rootSaga() {
  yield [
    watchGetTodos(),
    watchCreateTodo(),
    watchGetUnCheckNogles(),
  ];
}
