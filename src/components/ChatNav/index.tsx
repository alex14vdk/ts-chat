import React from 'react';
import './style.scss';
import MessageEditPanelContainer from "../../containers/MessageEditPanel";
import {dialogOutclickClassIgnor} from "../../containers/DialogueList";

interface IChatNav {
    messageEditPanel: number | boolean
    onLogoutHandler(event: React.MouseEvent): void
    onChatListToggle(event: React.MouseEvent): void
}

const ChatNav: React.FC<IChatNav> = ({messageEditPanel, onLogoutHandler, onChatListToggle}) => {
    return (
        <nav className="chat__nav navbar-chat navbar navbar-dark bg-dark shadow">
            <button className={`navbar-chat__toggler navbar-toggler ${dialogOutclickClassIgnor}`}
                    type="button"
                    onClick={e => onChatListToggle(e)}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <h2 className="navbar-brand navbar-chat__name">
                TS-Chat
            </h2>
            {
                messageEditPanel
                    ?
                    <MessageEditPanelContainer/>
                    :
                    <button type="button"
                            className={`navbar-chat__logout btn btn-outline-light ${dialogOutclickClassIgnor}`}
                            onClick={e => onLogoutHandler(e)}
                    >
                        Logout
                    </button>
            }
        </nav>
    )
}

export default ChatNav;