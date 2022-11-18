import React, {ChangeEvent, KeyboardEvent} from "react";

import {useState} from "react";
import {Input} from "./components/Input";
import {Button} from "./components/Button";


export const InputTask = () => {

    const [messages, setMessages] = useState([
        {message: 'message-1'},
        {message: 'message-2'},
        {message: 'message-3'},
    ]);

    const messageItem = messages.map((message, index) => <div key={index}>{message.message}</div>)

    const addTitle = (title: string,) => {
        setMessages([{message: title}, ...messages,]);
    }

    const [title, setTitle] = useState('');

    const callbackHandler = () => {
        addTitle(title);
        setTitle('');
    }

    return (
        <div>
            <Input setTitle={setTitle} title={title} addTitle={callbackHandler}/>
            <Button name={'+'} callBack={callbackHandler}/>
            {messageItem}
        </div>
    )
}
