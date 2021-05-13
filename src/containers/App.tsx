import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../redux/reduser";
import App from "../components/App";


const AppContainer: React.FC = (props) => {
    const {isAuth} = useSelector((state: RootState) => state.auth);
    const data = {
        isAuth
    }
    return <App {...data}/>
}

export default AppContainer;