import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {userLogin} from '../redux/actions/auth';
import {LocalStorageCurUser} from '../utils/localStorage';
import LoginForm from "../components/LoginForm";

const LoginFormContainer: React.FC = (props) => {
    const [userName, setUserName] = useState<string>("");
    const dispatch = useDispatch();

    useEffect(() => {
        const savedUser = LocalStorageCurUser.getUser().trim();
        if (savedUser !== "") {
            dispatch(userLogin(savedUser));
        }
    }, []);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setUserName(event.target.value);
    }

    const onSubmitHandler = (userName: string, event: React.MouseEvent) => {
        event.preventDefault();
        let curUserName = userName.trim();
        if (curUserName !== "") {
            LocalStorageCurUser.setUser(curUserName);
            dispatch(userLogin(curUserName));
        }
    }

    const data = {
        userName,
        onChangeHandler,
        onSubmitHandler
    }

    return <LoginForm {...data}/>
}

export default LoginFormContainer;