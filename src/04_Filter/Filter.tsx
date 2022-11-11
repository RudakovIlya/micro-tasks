import React from "react";
import {FilterPropsType} from "../App";

type FilterObjectType = {
    banknots: string,
    nominal: number,
    number: string,
}

type FilterButtonType = FilterPropsType;

type FilterHomePropsType = {
    currentMoney: Array<FilterObjectType>,
    onClickFilterHandler: (current: FilterButtonType) => void
}

export const Filter = (props: FilterHomePropsType) => {
    return (
        <div>
            <ul>
                {
                    props.currentMoney.map((objFromMoneyArr, id) => {
                        return (
                            <li key={id + 1}>
                                <span> {objFromMoneyArr.banknots}</span>
                                <span> {objFromMoneyArr.nominal}</span>
                                <span> {objFromMoneyArr.number}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <div style={{display: 'flex', columnGap: '20px', justifyContent: 'center'}}>
                <button onClick={() => {
                    props.onClickFilterHandler('all')
                }}>all
                </button>
                <button onClick={() => {
                    props.onClickFilterHandler('rubles')
                }}>rubles
                </button>
                <button onClick={() => {
                    props.onClickFilterHandler('dollars')
                }}>dollars
                </button>
            </div>
        </div>
    )
}