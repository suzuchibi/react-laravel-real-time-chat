import {
  State,
  DATAS_FETCH,
  USER_FETCH,
  MainActionTypes as aTypes,
} from '../types';

const initialState: State = {
  datas: [],
  user: '',
};

const mainReducer = (state = initialState, action: aTypes): State => {
  switch (action.type) {
    case DATAS_FETCH:
      return {
        ...state,
        datas: action.payload,
      };
    case USER_FETCH:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default mainReducer;
