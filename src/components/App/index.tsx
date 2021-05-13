import React from 'react';
import Chat from "../Chat";
import LoginFormContainer from "../../containers/LoginForm";
import './style.scss'

interface IAppProps {
    isAuth: boolean
}

const App: React.FC<IAppProps> = ({isAuth}) => {
    return (
        <React.Fragment>
            {isAuth ? <Chat/> : <LoginFormContainer/>}
        </React.Fragment>
    )
}


export default App;