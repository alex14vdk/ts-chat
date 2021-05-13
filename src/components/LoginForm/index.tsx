import React from 'react';
import './style.scss';

interface ILoginForm {
    userName: string
    onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void
    onSubmitHandler(userName: string, event: React.MouseEvent): void
}

const LoginForm: React.FC<ILoginForm> = ({userName, onChangeHandler, onSubmitHandler}) => {
    return (
        <div className="login container-fluid">
            <div className="row">
                <div className="login__bg-image col-md-6 d-none d-md-flex"></div>
                <div className="login__form col-md-6 bg-light d-flex align-items-center py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-xl-7 mx-auto text-center">
                                <h1 className="h3 mb-4">LocalStorage Chat</h1>
                                <form>
                                    <div className="form-group mb-3">
                                        <input id="inputLogin" type="text" placeholder="Login"
                                               className="form-control border-0 shadow-sm px-4"
                                               value={userName}
                                               onChange={e => onChangeHandler(e)}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input id="inputPassword" type="password" placeholder="Password"
                                               className="form-control border-0 shadow-sm px-4"/>
                                    </div>
                                    <button type="submit"
                                            className="btn btn-dark btn-block text-uppercase mb-2 shadow-sm"
                                            onClick={e => onSubmitHandler(userName, e)}
                                    >
                                        Sign in
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;