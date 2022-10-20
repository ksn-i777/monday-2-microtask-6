import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (value: string) => void,
}

export function FullInput(props: FullInputPropsType) {

    let [text, setText] = useState('')

    function onChangeInputHandler(e: ChangeEvent<HTMLInputElement>) {
        setText(e.currentTarget.value)
    }
    function onClickButtonHandler() {
        props.addMessage(text)
        setText('')
    }


    return (
        <div>
            <input value={text} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}