import React from 'react';
import './style.scss';
import classNames from "classnames";

interface ILoadingProp {
    chat?: boolean
}

const Loading: React.FC<ILoadingProp> = ({chat}) => {
    const loadingClasses = classNames(
        'loading-sp m-auto',
        {'loading-sp--for-chat': chat}
    );

    return (
        <div className={loadingClasses}>
            <div className="loading-pulse">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading;