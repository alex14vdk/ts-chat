import {AnyAction} from 'redux';
import {USER_LOGIN, USER_LOGOUT} from "../types";

export interface IAuthState {
    curUser: string
    isAuth: boolean
}

export const initialState: IAuthState = {
    curUser: '',
    isAuth: false
};

const auth = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                curUser: action.payload,
                isAuth: true
            };

        case USER_LOGOUT:
            return {
                ...state,
                isAuth: false
            };

        default:
            return state
    }
    ;
};

export default auth;