import { combineReducers } from 'redux';
import mainReducer from '../features/main/reducers/mainReducer';
import statusReducer from '../features/status/statusReducer';

const rootReducer = combineReducers({
  main: mainReducer,
  status: statusReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
