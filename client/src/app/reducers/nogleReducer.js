import Immutable from 'immutable';
import {
  SET_CHECKED_NOGLES,
  SET_UNCHECK_NOGLES,
} from 'constants/NogleActionTypes';

const initialState = Immutable.Map({
  uncheckList: [],
  checkedList: [],
});

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_UNCHECK_NOGLES:
      return state.set('uncheckList', action.payload);
    case SET_CHECKED_NOGLES:
      return state.set('checkedList', action.payload);
    default:
      return state;
  }
}
