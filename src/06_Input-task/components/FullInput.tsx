import React, {ChangeEvent, useState, KeyboardEvent} from "react";

type FullInputPropsType = {
    addMessage: (title: string) => void;
}

export const FullInput = (props: FullInputPropsType) => {

    const [title, setTitle] = useState('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    const onClickAddTitle = () => {
            props.addMessage(title);
            setTitle('');
    }

    const onKeyPressAddTitle = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.addMessage(title);
            setTitle('');
        }
    }

    return (
        <div>
            <input value={title} type="text" onChange={onChangeInputHandler} onKeyDown={onKeyPressAddTitle}/>
            <button onClick={onClickAddTitle}>+</button>
        </div>
    )
}