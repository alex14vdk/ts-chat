import React, {useEffect, useRef} from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {messageAdd, messageEdit} from '../redux/actions/message';
import {RootState} from "../redux/reduser";
import {IMessage} from '../interfaces';
import ChatForm from "../components/ChatForm";


const ChatFormContainer: React.FC = () => {
    const [message, setMessage] = useState("");
    const addMessageDispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const {
        message: {messages},
        auth: {curUser},
        option: {curMessageType, messageEditText, messageEditPanel}
    } = useSelector((state: RootState) => state);

    const newMessageData: IMessage = {
        id: Date.now(),
        author: curUser,
        type: curMessageType,
        date: Date.now(),
        text: message
    }

    let messageEditElement: IMessage[];

    useEffect(() => {
        if (messageEditText) {
            messageEditElement = messages.filter(item => item.id === messageEditText);
            if (messageEditElement.length) setMessage(messageEditElement[0].text);

            setTimeout(() => {
                inputRef.current!.focus();
            }, 100);
        }

        if (messageEditPanel !== messageEditText) {
            setMessage("");
        }
    }, [messageEditPanel, messageEditText])


    const addNewMessage = (event: React.KeyboardEvent | React.MouseEvent, id?: number) => {
        event.preventDefault();
        if (message.trim() !== '') {
            if (id) {
                addMessageDispatch(messageEdit(id, message));
                setMessage("");
            } else {
                addMessageDispatch(messageAdd(newMessageData));
                setMessage("");
            }
        }
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }

    const enterForSubmit = (event: React.KeyboardEvent, id?: number) => {
        if (event.key === "Enter") {
            addNewMessage(event, id);
        }
    }

    const clickForSubmit = (event: React.MouseEvent, id?: number) => {
        addNewMessage(event, id);
    }

    const data = {
        message,
        messageEditText,
        messageEditPanel,
        inputRef,
        changeHandler,
        enterForSubmit,
        clickForSubmit
    }

    return <ChatForm {...data}/>
}

export default ChatFormContainer;