import React from 'react';
import './style.scss';
import classNames from 'classnames';
import {messageOutclickClassIgnor} from "../../containers/MessageEditPanel";
import {IMessage} from "../../interfaces";

interface IMessageProp {
    reFormatDate: string
    curUser: string
    dataProp: IMessage
    messageEditPanel: number | boolean
    messagePanel(id: number, e: React.MouseEvent): void
}

const Message: React.FC<IMessageProp> = (
    {reFormatDate, curUser, dataProp, messageEditPanel, messagePanel}
) => {
    const {id, text, author} = dataProp;

    const messageClasses = classNames(
        'message', {
            'message--my': curUser === author,
            'message--edited': messageEditPanel === id
        }
    );
    const messageBlockClasses = classNames(
        'message__block',
        {[messageOutclickClassIgnor]: curUser === author}
    );

    return (
        <div className={messageClasses}>
            <div className={messageBlockClasses}>
                <div className="message__text rounded py-2 px-3 mb-1"
                     onClick={e => messagePanel(id, e)}
                >
                    {text}
                </div>
                <div className="message__info small text-muted">
                    <span className="message__author">{author}</span>
                    <span className="message__date">{reFormatDate}</span>
                </div>
            </div>
        </div>
    )
}

export default Message;