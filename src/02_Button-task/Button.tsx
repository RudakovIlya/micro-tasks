import React from "react";
import {Buttons} from "./Components/Buttons";


export const Button = () => {
    const ButtonFoo = (subscriber: string, age: number, address: string) => {
        console.log(`Subscriber: ${subscriber}, age: ${age}, address: ${address}`)
    };

    const StupidButton = () => {
        console.log('Im stupid button')
    }

    return (
        <div>
            <Buttons name={'Chanel-1'} callBack={() => ButtonFoo('Im Vasya', 22, 'Abinsk')}/>
            <Buttons name={'Chanel-2'} callBack={() => ButtonFoo('Im Ivan', 23, 'Abinsk')}/>
            <Buttons name={'Delete'} callBack={() => ButtonFoo('Im Delete', 25, 'Abinsk')}/>
            <Buttons name={'Stupid Button'} callBack={StupidButton}/>
        </div>
    )
};