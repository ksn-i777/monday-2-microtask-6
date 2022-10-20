import React from 'react';

type ButtonPropsType = {
    name: string,
    action: () => void,
}

export function Button(props: ButtonPropsType) {

    return (
        <>
            <button onClick={props.action}>{props.name}</button>
        </>
    )
}





