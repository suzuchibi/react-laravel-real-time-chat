export interface State {
  isloading: boolean;
  isSending: boolean;
}

/**
 * Actions
 */
export const HANDLE_IS_LOADING = 'status/loading';
export const HANDLE_IS_SENDING = 'status/sending';

export interface HandleIsLoading {
  type: typeof HANDLE_IS_LOADING;
  payload: boolean;
}
export interface HandleIsSending {
  type: typeof HANDLE_IS_SENDING;
  payload: boolean;
}
export type StatusActionTypes = HandleIsLoading | HandleIsSending;
