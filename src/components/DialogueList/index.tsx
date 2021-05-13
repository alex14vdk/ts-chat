import React from 'react';
import './style.scss';
import classNames from "classnames";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons'
import {IDialogue, IOutClickRef} from "../../interfaces";
import Loading from "../Loading";

interface IDialogueList {
    divRef: IOutClickRef
    dialogues: IDialogue[]
    loading: boolean,
    curMessageType: number
    dialogueListOpen: boolean,
    messageTypeChangeHandler(id: number, e: React.MouseEvent): void
}

const DialogueList: React.FC<IDialogueList> = (
    {divRef, dialogues, loading, curMessageType, dialogueListOpen, messageTypeChangeHandler}
) => {

    let messageClasses = classNames(
        'dialogue-list bg-dark',
        {'dialogue-list--open shadow': dialogueListOpen}
    );

    let dialogueItemClasses = (id: number, curMessageType: number) => {
        return classNames(
            'dialogue-list__item list-group-item text-light',
            {'dialogue-list__item--active': id === curMessageType}
        );
    }

    const getIcon = (objIcon: { [k: string]: any } = {}, iconName: string) => {
        try {
            return <FontAwesomeIcon className="mr-3" icon={objIcon[iconName]}/>
        } catch (e) {
            return null
        }
    }

    return (
        <div className={messageClasses} ref={divRef}>
            <h3 className="sidebar-heading text-white h5 p-4 text-center">Dialogue List</h3>
            <ul className="dialogue-list__list-group list-group">
                {
                    loading ? <Loading/> :
                        dialogues.map(({id, icon, name}) => (
                            <li key={'dialogue' + id}
                                className={dialogueItemClasses(id, curMessageType)}
                                onClick={e => messageTypeChangeHandler(id, e)}
                            >
                                {getIcon(Icons, icon)}
                                <span>{name}</span>
                            </li>
                        ))
                }
            </ul>
        </div>
    )
}

export default DialogueList;