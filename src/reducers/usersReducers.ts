import {ISingleUser} from '../entities/user';
import * as actionTypes from '../actions/actionTypes/IUserTypes'

export interface IUsersReducer{
    usersList:ISingleUser[];
}

const defaultState=():IUsersReducer=>({
    usersList:[]
});


// eslint-disable-next-line import/no-anonymous-default-export
export default (state=defaultState(), action:any)=>{
    switch(action.type){
        case actionTypes.GET_USERS:{
            const payload: actionTypes.IUserTypes['GET_USERS']=action;
            return {
                ...state,
                usersList:payload.usersList
            }
        }
        default: {
            return state
        }
    }
}