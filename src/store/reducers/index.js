import {combineReducers} from 'redux';
// import userReducer from './userReducer';
import songReducer from './songReducer';

export default combineReducers({
    song: songReducer,
    // user: userReducer,
})