import { combineReducers  } from 'redux';
import * as types from '../../constants/ActionTypes';

const userinfo =(state = {}, action)=>{
    console.log(state,action)
    switch(action.type){
        case types.GET_USERINFO :
            return action.info
        default:
            return state
    }
}

export default combineReducers({
    userinfo
})