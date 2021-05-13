import {DIALOGUES_FAILURE, DIALOGUES_REQUEST, DIALOGUES_SUCCESS} from "../types";
import {getDialogues} from "../../utils/getDataFunc";
import {IDialogue} from "../../interfaces";


export const dialogueRequest = () => {
    return {
        type: DIALOGUES_REQUEST
    }
};
export const dialogueLoad = (data: IDialogue[]) => {
    return {
        type: DIALOGUES_SUCCESS,
        payload: data
    }
};
export const dialogueError = (error: any) => {
    return {
        type: DIALOGUES_FAILURE,
        payload: error
    }
};


export const getDialoguesList = () => (dispatch: any) => {
    dispatch(dialogueRequest());
    getDialogues().then(
        ({data}) => {
            setTimeout(() => {
                dispatch(dialogueLoad(data))
            }, 1000);//server delay imitation
        },
        error => {
            dispatch(dialogueError(error))
        }
    )
}