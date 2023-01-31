import * as types from './user.actionTypes'

const initialState={
    isLoading:false,
    isError:false,
    isAuth:false,
    token:null
}

const reducer =(state=initialState,{type,payload})=>{
    switch(type){
        case types.USER_LOGIN_REQUEST:{
            return {
                ...state,
                isLoading:true
            }
        }
        case types.USER_LOGIN_SUCCESS:{
            return {
                ...state,
                isLoading:false,
                isAuth:true,
                token:payload
            }
        }
        case types.USER_LOGIN_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isAuth:false,
                token:null,
                isError:true
            }
        }
        default : return state
    }
}

export { reducer }