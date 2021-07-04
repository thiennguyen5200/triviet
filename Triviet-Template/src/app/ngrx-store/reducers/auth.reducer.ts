import { User } from '../models/user.model';
import { AccountAction, AccountActionTypes } from '../actions/account.action';
import { ErrorResponse } from '../models/types.model';

export interface AccountState{
    list: User,
    loading: boolean,
    error: ErrorResponse
}

const initialStateAccount: AccountState = {
    list: null,
    loading: false,
    error: undefined
}

export function AccountReducer(state: AccountState = initialStateAccount, action: AccountAction){
    switch (action.type){
        case AccountActionTypes.ADD_ITEM:
            return {
                state,
                loading: true,
            };
        case AccountActionTypes.ADD_ITEM_SUCCESS:
            return {
                state,
                list: action.payload,
                loading: false,
                error: {
                    code: 1,
                    message: 'Thành công'
                }
            }
        case AccountActionTypes.ADD_ITEM_FAILURE:
            return {
                state,
                error:  {
                            code: 0,
                            message: action.payload
                        },
                loading: false
            }
        case AccountActionTypes.DELETE_ITEM:
            return {...state,loading:true}
        case AccountActionTypes.DELETE_ITEM_SUCCESS:
            return {
                state,
                list: null, 
                loading: false
            };
        case AccountActionTypes.DELETE_ITEM_FAILURE:
            return {
                ...state,
                error: {
                            code: 0,
                            message: action.payload
                        },
                loading: false
            };
        default:
            return state;
    }
}