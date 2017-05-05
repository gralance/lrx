import {
  GET_UNCHECK_NOGLES,
  SET_UNCHECK_NOGLES,
  SET_CHECKED_NOGLES,
} from 'constants/NogleActionTypes';

export const getUnCheckNogles = () => ({ type: GET_UNCHECK_NOGLES });

export const setUnCheckNogles = payload => ({ type: SET_UNCHECK_NOGLES, payload });

export const setCheckedNogles = payload => ({ type: SET_CHECKED_NOGLES, payload });

const NogleActions = {
  getUnCheckNogles,
  setUnCheckNogles,
  setCheckedNogles,
};

export default NogleActions;
