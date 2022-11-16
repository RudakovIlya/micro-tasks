import React, {ChangeEvent, KeyboardEvent} from "react";

type NewInputPropsType = {
    value: string,
    setMessage: (value: string) => void,
    addMessage: (value: string) => void
}

export const NewInput = (props: NewInputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMessage(event.currentTarget.value);
    };

    const onKeyPressAddTitle = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.addMessage(props.value);
        }
    }

    return (
        <input value={props.value} onChange={onChangeInputHandler} onKeyDown={onKeyPressAddTitle}/>
    )
}