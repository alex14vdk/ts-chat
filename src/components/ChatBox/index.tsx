import React, {RefObject} from 'react';
import './style.scss';
import {IMessage} from "../../interfaces";
import classNames from "classnames";
import MessageContainer from "../../containers/Message";
import Loading from "../Loading";

interface IChatBox {
    dialogueListOpen: boolean,
    messagesRef: RefObject<HTMLDivElement>,
    loading: boolean,
    messages: IMessage[]
}

const ChatBox: React.FC<IChatBox> = ({dialogueListOpen, messagesRef, loading, messages}) => {
    let chatBoxClassNames = classNames(
        "chat__box p-3 bg-white",
        {"chat__box--blured": dialogueListOpen}
    )

    return (
        <div className={chatBoxClassNames} ref={messagesRef}>
            {
                loading
                    ? <Loading chat={true}/>
                    : messages.map(message => <MessageContainer key={message.id} dataProp={message}/>)
            }
        </div>
    )
}

export default ChatBox;