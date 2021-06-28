import {
  MessageItems,
  DATAS_FETCH,
  USER_FETCH,
  MainActionTypes as aTypes,
} from '../types';

export const fetchDatas = (payload: MessageItems): aTypes => {
  return {
    type: DATAS_FETCH,
    payload,
  };
};

export const fetchUser = (payload: string): aTypes => {
  return {
    type: USER_FETCH,
    payload,
  };
};
