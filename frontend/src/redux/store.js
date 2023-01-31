import {legacy_createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {reducer as userRouer} from './user/user.reducer'


const rootReducer= combineReducers({
    userRouer
    })

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export { store };