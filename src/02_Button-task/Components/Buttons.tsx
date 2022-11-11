import React from "react";

type ButtonsPropsType = {
    name: string,
    callBack: () => void,
}

export const Buttons = (props: ButtonsPropsType) => {
    const onClickHandler = () => {
        props.callBack();
    };
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}