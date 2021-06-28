import {
  HANDLE_IS_LOADING,
  HANDLE_IS_SENDING,
  StatusActionTypes as aTypes,
} from './types';

export const handleIsLoading = (payload: boolean): aTypes => {
  return {
    type: HANDLE_IS_LOADING,
    payload,
  };
};

export const handleIsSending = (payload: boolean): aTypes => {
  return {
    type: HANDLE_IS_SENDING,
    payload,
  };
};
