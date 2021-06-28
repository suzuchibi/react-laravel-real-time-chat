/**
 * Base
 */
export interface Message {
  id: number;
  msg: string;
  uname: string;
  time: string;
}
export type MessageItems = Array<Message>;

export interface State {
  datas: MessageItems;
  user: string;
}

/**
 * Actions
 */
export const DATAS_FETCH = 'datas/fetch';
export const USER_FETCH = 'user/fetch';

export interface DatasFetch {
  type: typeof DATAS_FETCH;
  payload: MessageItems;
}
export interface UserFetch {
  type: typeof USER_FETCH;
  payload: string;
}
export type MainActionTypes = DatasFetch | UserFetch;

/**
 * MessageLeftProps
 */
export interface MessageLeftProps {
  uname: string;
  prevUser: string | null;
  nextUser: string | null;
  coment: string;
  time: string;
}

/**
 * MessageRightProps
 */
export interface MessageRightProps {
  uname: string;
  nextUser: string | null;
  coment: string;
  time: string;
}
