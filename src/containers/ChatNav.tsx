import React from 'react';
import {userLogout} from "../redux/actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {LocalStorageCurUser} from "../utils/localStorage";
import {dialogueListToggle} from '../redux/actions/option';
import {RootState} from "../redux/reduser";
import ChatNav from "../components/ChatNav";

const ChatNavContainer: React.FC = () => {
    const dispatch = useDispatch();
    const {messageEditPanel} = useSelector((state: RootState) => state.option);

    const onLogoutHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        LocalStorageCurUser.setUser("");
        dispatch(userLogout());
        window.location.reload();
    }

    const onChatListToggle = (event: React.MouseEvent) => {
        event.preventDefault();
        dispatch(dialogueListToggle());
    }

    const data = {
        messageEditPanel,
        onLogoutHandler,
        onChatListToggle
    }

    return <ChatNav {...data}/>
}

export default ChatNavContainer;