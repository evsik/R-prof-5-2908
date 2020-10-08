import msgReducer from './messages';
import chatReducer from './chat'
import {combineReducers} from "redux";

import {connectRouter} from "connected-react-router";

export default history => combineReducers({
    msgReducer,
    chatReducer,
    router: connectRouter(history)
});
