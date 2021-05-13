import {combineReducers} from 'redux';
import message, {IMessageState} from './redusers/message';
import auth, {IAuthState} from './redusers/auth';
import option, {IOptionState} from "./redusers/option";
import dialogues, {IDialogueState} from "./redusers/dialogues";

export interface RootState {
    auth: IAuthState
    message: IMessageState
    option: IOptionState
    dialogues: IDialogueState
}

export default combineReducers<RootState>({
    auth,
    message,
    option,
    dialogues
})