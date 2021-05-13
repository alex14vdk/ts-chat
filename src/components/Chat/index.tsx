import React from 'react';
import './style.scss';
import DialogueListContainer from "../../containers/DialogueList";
import ChatBoxContainer from "../../containers/ChatBox";
import ChatFormContainer from "../../containers/ChatForm";
import ChatNavContainer from "../../containers/ChatNav";

const Chat: React.FC = () => {
    return (
        <div className="chat-wrapper">
            <div className="chat rounded-lg overflow-hidden shadow-lg">
                <DialogueListContainer/>
                <ChatNavContainer/>
                <ChatBoxContainer/>
                <ChatFormContainer/>
            </div>
        </div>
    )
}

export default Chat;