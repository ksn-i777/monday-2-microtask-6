import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    value: string,
    changeInput: (e: ChangeEvent<HTMLInputElement>) => void,
    ctrlEnter: (e: KeyboardEvent<HTMLInputElement>) => void,
}



export function Input(props: InputPropsType) {

    return (
        <>
            <input value={props.value} onChange={props.changeInput} onKeyPress={props.ctrlEnter}/>
        </>
    )
}