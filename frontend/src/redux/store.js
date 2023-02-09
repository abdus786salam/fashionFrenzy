import {legacy_createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {reducer as authReducer} from './user/user.reducer'
import {reducer as productReducer} from './products/product.reducer'


const rootReducer= combineReducers({
    authReducer,
    productReducer
    })

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export { store };