import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string) => void,
    addTitle: () => void,
}

export const Input = (props: InputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.target.value)
    }
    const onKeyDownInputHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.addTitle();
            props.setTitle('');
        }
    }

    return (
        <input value={props.title} onChange={onChangeInputHandler} onKeyDown={onKeyDownInputHandler}/>
    );
};

