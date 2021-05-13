import {AnyAction} from 'redux';
import {IMessage} from '../../interfaces';
import {
    MESSAGES_SUCCESS,
    CHAT_MESSAGE_ADD,
    MESSAGES_REQUEST,
    MESSAGES_FAILURE,
    CHAT_MESSAGE_EDIT,
    CHAT_MESSAGE_DELETE
} from '../types';

export interface IMessageState {
    messages: IMessage[],
    loading: boolean,
    error: any
}

export const initialState: IMessageState = {
    messages: [],
    loading: true,
    error: null
};

const message = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case MESSAGES_REQUEST:
            return {
                ...state,
                messages: []
            };
        case MESSAGES_SUCCESS:
            return {
                ...state,
                messages: action.payload,
                loading: false
            };
        case MESSAGES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CHAT_MESSAGE_ADD:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };
        case CHAT_MESSAGE_EDIT:
            return {
                ...state,
                messages: [...state.messages.map(
                    message => {
                        if (message.id === action.payload.idMessage) {
                            message.text = action.payload.messageText;
                        }
                        return message;
                    }
                )]
            }
        case CHAT_MESSAGE_DELETE:
            return {
                ...state,
                messages: [...state.messages.filter(item => item.id !== action.payload)]
            };
        default:
            return state
    }
};

export default message;