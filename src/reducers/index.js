import { combineReducers } from 'redux';
import { ideas } from './ideas';

export const rootReducer = combineReducers({
    ideas,
});

export default rootReducer;