import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllMessages} from '../redux/actions/message';
import {LocalStorageMess} from '../utils/localStorage';
import {IMessage} from "../interfaces";
import {RootState} from "../redux/reduser";
import ChatBox from "../components/ChatBox";


const ChatBoxContainer: React.FC = () => {
    const dispatch = useDispatch();
    const messagesRef = useRef<HTMLDivElement>(null);
    const {message: {messages, loading}, option: {dialogueListOpen, curMessageType}} = useSelector((state: RootState) => state);

    const scrollToBottom = () => {
        messagesRef.current!.scrollTo(0, messagesRef.current!.scrollHeight);
    }

    useEffect(() => {
        scrollToBottom();
        dispatch(getAllMessages(LocalStorageMess.getChat()));
    }, []);

    useEffect(() => {
        scrollToBottom();
        LocalStorageMess.setChat<IMessage>(messages);
    }, [messages, curMessageType])

    const data = {
        dialogueListOpen,
        messagesRef,
        loading,
        messages: messages.filter(message => message.type === curMessageType)
    }
    return <ChatBox {...data}/>
}

export default ChatBoxContainer;