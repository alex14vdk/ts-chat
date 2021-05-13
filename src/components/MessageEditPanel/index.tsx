import React from 'react';
import './style.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons'
import {IOutClickRef} from "../../interfaces";

interface IMessageEditPanel {
    onEditMessage(messageId: number, event: React.MouseEvent): void
    onDeleteMessage(messageId: number, event: React.MouseEvent): void
    divRef: IOutClickRef
    messageEditPanel: number
}

const MessageEditPanel: React.FC<IMessageEditPanel> = ({onEditMessage, onDeleteMessage, divRef, messageEditPanel}) => {
    return (
        <div className="navbar-chat__edit-panel" ref={divRef}>
            <div className="edit-message mr-3">
                <button type="button"
                        title="Edit message"
                        className="edit-message__btn btn btn-outline-light"
                        onClick={e => onEditMessage(messageEditPanel, e)}
                >
                    <FontAwesomeIcon icon={Icons.faPencilAlt}/>
                </button>
            </div>
            <div className="edit-message">
                <button type="button"
                        title="Delete message"
                        className="edit-message__btn btn btn-outline-light"
                        onClick={e => onDeleteMessage(messageEditPanel, e)}
                >
                    <FontAwesomeIcon icon={Icons.faTrashAlt}/>
                </button>
            </div>
        </div>
    )
}

export default MessageEditPanel;