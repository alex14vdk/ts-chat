import {AnyAction} from 'redux';
import {CHAT_MESSAGE_EDIT_MODE, CHAT_TYPE, DIALOGUE_LIST, MESSAGE_EDIT_PANEL} from '../types';

export interface IOptionState {
    dialogueListOpen: boolean,
    messageEditPanel: number,
    curMessageType: number,
    messageEditText: number
}

export const initialState: IOptionState = {
    dialogueListOpen: false,
    messageEditPanel: 0,
    curMessageType: 1,
    messageEditText: 0
};

const option = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case MESSAGE_EDIT_PANEL:
            return {
                ...state,
                messageEditPanel: action.payload
            };
        case CHAT_TYPE:
            return {
                ...state,
                curMessageType: action.payload
            }
        case DIALOGUE_LIST:
            return {
                ...state,
                dialogueListOpen: action.payload === "auto" ? !state.dialogueListOpen : action.payload
            };
        case CHAT_MESSAGE_EDIT_MODE:
            return {
                ...state,
                messageEditText: action.payload
            };
        default:
            return state
    }
};

export default option;