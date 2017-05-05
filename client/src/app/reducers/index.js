import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import counter from './counterReducer';
import todos from './todoReducer';
import nogles from './nogleReducer';

/**
 * Combine reducers
 */
const rootReducer = combineReducers({
  counter,
  todos,
  nogles,
  routing
});

export default rootReducer;
