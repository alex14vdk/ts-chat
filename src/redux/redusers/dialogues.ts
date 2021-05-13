import {AnyAction} from 'redux';
import {IDialogue} from '../../interfaces';
import {DIALOGUES_FAILURE, DIALOGUES_REQUEST, DIALOGUES_SUCCESS} from "../types";

export interface IDialogueState {
    dialogues: IDialogue[],
    loading: boolean,
    error: any
}

export const initialState: IDialogueState = {
    dialogues: [],
    loading: true,
    error: null
};

const dialogues = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case DIALOGUES_REQUEST:
            return {
                ...state,
                dialogues: []
            };
        case DIALOGUES_SUCCESS:
            return {
                ...state,
                dialogues: action.payload,
                loading: false
            };
        case DIALOGUES_FAILURE:
            return {
                ...state,
                dialogues: [],
                loading: false,
                error: action.payload,
            };
        default:
            return state
    }
};

export default dialogues;