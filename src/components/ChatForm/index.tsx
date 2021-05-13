import React, {RefObject} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons'
import './style.scss';
import classNames from "classnames";
import {messageOutclickClassIgnor} from '../../containers/MessageEditPanel';

interface IChatForm {
    message: string
    messageEditText: number,
    messageEditPanel: number,
    inputRef: RefObject<HTMLInputElement>,
    changeHandler(event: React.ChangeEvent<HTMLInputElement>): void
    enterForSubmit(event: React.KeyboardEvent, id?: number): void
    clickForSubmit(event: React.MouseEvent, id?: number): void
}

const ChatForm: React.FC<IChatForm> = (
    {message, messageEditText, messageEditPanel, inputRef, changeHandler, enterForSubmit, clickForSubmit}
) => {

    let formClasses = classNames(
        'chat__form bg-light',
        {[messageOutclickClassIgnor]: messageEditText === messageEditPanel}
    );

    return (
        <form className={formClasses} action="#">
            <div className="input-group">
                <input type="textarea" placeholder="Type a message"
                       className="form-control rounded-0 border-0 bg-light shadow-none"
                       value={message}
                       onChange={e => changeHandler(e)}
                       onKeyPress={e => enterForSubmit(e, messageEditText)}
                       ref={inputRef}
                />
                <div className="input-group-append">
                    <button type="submit"
                            className="btn btn-dark shadow-none"
                            onClick={e => clickForSubmit(e, messageEditText)}
                    >
                        <FontAwesomeIcon icon={Icons.faGreaterThan}/>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ChatForm;