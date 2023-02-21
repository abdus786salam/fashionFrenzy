import {legacy_createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {reducer as authReducer} from './user/user.reducer'
import {reducer as productReducer} from './products/product.reducer'
import {reducer as cartReducer} from './cart/cart.reducer'
import { reducer as filterReducer } from './productFilter/productFilter.reducer'
import { reducer as adminReducer } from './admin/admin.reducer'

const rootReducer= combineReducers({
    authReducer,
    productReducer,
    cartReducer,
    filterReducer,
    adminReducer
    })

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export { store };