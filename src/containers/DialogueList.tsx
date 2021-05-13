import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/reduser";
import useOnclickOutside from 'react-cool-onclickoutside';
import {dialogueListToggle, messageTypeChange} from '../redux/actions/option';
import DialogueList from "../components/DialogueList";
import {getDialoguesList} from "../redux/actions/dialogues";
import {LocalStorageOpt} from '../utils/localStorage';
import {initialState as initialOption} from "../redux/redusers/option";

export const dialogOutclickClassIgnor = "dialogListIgnor";

const DialogueListContainer: React.FC = () => {
    const {
        auth: {curUser},
        option: {dialogueListOpen, curMessageType},
        dialogues: {dialogues, loading}
    } = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDialoguesList());

        if (LocalStorageOpt.getOption(curUser, LocalStorageOpt.DIALOGUE_LIST_OPEN)) {
            dispatch(dialogueListToggle());
        }

        const oldMesType = LocalStorageOpt.getOption(curUser, LocalStorageOpt.CUR_MESSAGE_TYPE_ID);
        oldMesType ? dispatch(messageTypeChange(oldMesType)) : dispatch(messageTypeChange(initialOption.curMessageType));

    }, []);


    useEffect(() => {
        LocalStorageOpt.setOption(curUser, LocalStorageOpt.DIALOGUE_LIST_OPEN, dialogueListOpen);
    }, [dialogueListOpen])

    const divRef = useOnclickOutside(
        () => {
            if (dialogueListOpen) {
                dispatch(dialogueListToggle(false));
            }
        }, {ignoreClass: dialogOutclickClassIgnor}
    );

    const messageTypeChangeHandler = (id: number, e: React.MouseEvent) => {
        e.preventDefault();

        LocalStorageOpt.setOption(curUser, LocalStorageOpt.CUR_MESSAGE_TYPE_ID, id);

        dispatch(messageTypeChange(id));
        dispatch(dialogueListToggle(false));
    }

    const data = {
        divRef,
        dialogues,
        loading,
        curMessageType,
        dialogueListOpen,
        messageTypeChangeHandler
    }

    return <DialogueList {...data} />
}

export default DialogueListContainer;