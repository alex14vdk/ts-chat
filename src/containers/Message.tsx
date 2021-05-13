import React from 'react';
import {IMessage} from '../interfaces';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/reduser";
import {timeConverter} from '../utils/timeConverter';
import {messagePanelOpen} from "../redux/actions/option";
import Message from "../components/Message";

interface IPropsMessage {
    dataProp: IMessage
}

const MessageContainer: React.FC<IPropsMessage> = ({dataProp}) => {
    const dispatch = useDispatch();
    const {auth: {curUser}, option: {messageEditPanel}} = useSelector((state: RootState) => state);
    const {author, date} = dataProp;
    const reFormatDate = timeConverter(date);


    const messagePanel = (id: number, e: React.MouseEvent) => {
        e.preventDefault();
        if (curUser === author) {
            dispatch(messagePanelOpen(id));
        }
    }

    const data = {
        reFormatDate,
        curUser,
        dataProp,
        messageEditPanel,
        messagePanel
    }

    return <Message {...data}/>
}

export default MessageContainer;