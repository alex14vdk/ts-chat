import {DIALOGUE_LIST, CHAT_MESSAGE_EDIT_MODE, CHAT_TYPE, MESSAGE_EDIT_PANEL} from "../types";

export const dialogueListToggle = (opened: string | boolean = "auto") => {
    return {
        type: DIALOGUE_LIST,
        payload: opened
    };
};

export const messageEditTextOn = (idMessage: number | boolean) => {
    return {
        type: CHAT_MESSAGE_EDIT_MODE,
        payload: idMessage
    };
};

export const messagePanelOpen = (idMessage: number) => {
    return {
        type: MESSAGE_EDIT_PANEL,
        payload: idMessage
    };
};

export const messageTypeChange = (idType: number) => {
    return {
        type: CHAT_TYPE,
        payload: idType
    };
};


