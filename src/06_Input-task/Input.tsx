import React, {ChangeEvent} from "react";

import {useState} from "react";
import {FullInput} from "./components/FullInput";
import {NewInput} from "./components/NewInput";
import {Buttons} from "../02_Button-task/Components/Buttons";
import {Button} from "./components/Button";

export const InputTask = () => {

    const [messages, setMessages] = useState([
        {message: 'message-1'},
        {message: 'message-2'},
        {message: 'message-3'},
    ]);

    const [message, setMessage] = useState('');

    const addMessage = (title: string) => {
        const newTask = {message: title};
        const trimTitle = title.trim()

        if (!trimTitle) {
            alert('Сообщение не может быть пустым!')
        } else {
            setMessages([newTask, ...messages]);
            setMessage('');
        }
    };

    const callBackButtonHandler = () => {
        addMessage(message);
    };

    return (
        <div>
            {/*<FullInput addMessage={addMessage}/>*/}
            <NewInput value={message} setMessage={setMessage} addMessage={addMessage}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>

            {
                messages.map((message, index) => {
                    return (
                        <div key={index}>{message.message}</div>
                    )
                })
            }

        </div>
    )
}