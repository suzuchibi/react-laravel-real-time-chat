import {
  State,
  HANDLE_IS_LOADING,
  HANDLE_IS_SENDING,
  StatusActionTypes as aTypes,
} from './types';

const initialState: State = {
  isloading: true,
  isSending: false,
};

const statusReducer = (state = initialState, action: aTypes): State => {
  switch (action.type) {
    case HANDLE_IS_LOADING:
      return {
        ...state,
        isloading: action.payload,
      };
    case HANDLE_IS_SENDING:
      return {
        ...state,
        isSending: action.payload,
      };
    default:
      return state;
  }
};
export default statusReducer;
