import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/reduser";
import {messageEditTextOn, messagePanelOpen} from "../redux/actions/option";
import {messageDelete} from "../redux/actions/message";
import useOnclickOutside from "react-cool-onclickoutside";
import MessageEditPanel from "../components/MessageEditPanel";

export const messageOutclickClassIgnor = 'messageOutclickIgnor';

const MessageEditPanelContainer: React.FC = () => {
    const dispatch = useDispatch();
    const {messageEditPanel} = useSelector((state: RootState) => state.option);

    const onEditMessage = (messageId: number, event: React.MouseEvent) => {
        event.preventDefault();
        dispatch(messageEditTextOn(messageId));
    }
    const onDeleteMessage = (messageId: number, event: React.MouseEvent) => {
        event.preventDefault();
        dispatch(messageDelete(messageId));
    }

    const divRef = useOnclickOutside(
        () => {
            if (messageEditPanel) {
                dispatch(messagePanelOpen(0));
            }
        }, {ignoreClass: messageOutclickClassIgnor}
    );

    const data = {
        onEditMessage,
        onDeleteMessage,
        divRef,
        messageEditPanel
    }

    return <MessageEditPanel {...data} />
}

export default MessageEditPanelContainer;