import {USER_LOGIN, USER_LOGOUT} from "../types";

export const userLogin = (name: string) => {
    return {
        type: USER_LOGIN,
        payload: name
    };
};

export const userLogout = () => {
    return {
        type: USER_LOGOUT
    };
};