import {IMessage} from "../../interfaces";
import {getMessages} from "../../utils/getDataFunc";
import {LocalStorageSiteVisited} from "../../utils/localStorage";
import {
    MESSAGES_SUCCESS,
    MESSAGES_REQUEST,
    MESSAGES_FAILURE,
    CHAT_MESSAGE_ADD,
    CHAT_MESSAGE_DELETE,
    CHAT_MESSAGE_EDIT
} from "../types";

const messagesRequest = () => {
    return {
        type: MESSAGES_REQUEST
    };
};
const messagesLoad = (messages: IMessage[]) => {
    return {
        type: MESSAGES_SUCCESS,
        payload: messages
    };
};

const messagesError = (error: any) => {
    return {
        type: MESSAGES_FAILURE,
        payload: error
    };
};

export const messageAdd = (newMessage: IMessage) => {
    return {
        type: CHAT_MESSAGE_ADD,
        payload: newMessage
    };
};

export const messageEdit = (idMessage: number, messageText: string) => {
    return {
        type: CHAT_MESSAGE_EDIT,
        payload: {idMessage, messageText}
    };
};

export const messageDelete = (idMessage: number) => {
    return {
        type: CHAT_MESSAGE_DELETE,
        payload: idMessage
    };
};

export const getAllMessages = (localStorageMessages: IMessage[]) => (dispatch: any) => {
    dispatch(messagesRequest());

    if (LocalStorageSiteVisited() || localStorageMessages.length > 0) {
        setTimeout(() => {
            dispatch(messagesLoad(localStorageMessages));
        }, 1000);//server delay imitation
    } else {
        getMessages().then(
            ({data}) => {
                setTimeout(() => {
                    dispatch(messagesLoad(data))
                }, 1000);//server delay imitation
            },
            error => {
                dispatch(messagesError(error))
            }
        )
    }
}