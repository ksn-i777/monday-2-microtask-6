import React, {ChangeEvent, Fragment, KeyboardEvent, useState} from 'react';
import './App.css';
import {FullInput} from './components/FullInput';
import {Input} from './components/Input';
import {Button} from './components/Button';

function App() {
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    // input state
    let [text, setText] = useState('')

    // for input
    function onChangeInputHandler(e: ChangeEvent<HTMLInputElement>) {
        setText(e.currentTarget.value)
    }
    function onKeyPress(e: KeyboardEvent<HTMLInputElement>) {
        if (e.ctrlKey && e.charCode === 13) {
            addMessage()
            setText('')
        }
    }

    // for button
    function addMessage() {
        let newArrayObject = {message: text}
        setMessage([newArrayObject, ...message])
        setText('')
    }

    return (
        <div className="App">
           {/*<FullInput addMessage={addMessage}/>*/}
            <Input value={text} changeInput={onChangeInputHandler} ctrlEnter={onKeyPress}/>
            <Button name={'+'} action={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}

export default App;
