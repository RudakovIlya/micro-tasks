import React, {useState} from 'react';
import './App.css';
import {Button} from "./02_Button-task/Button";
import {State} from "./03_UseState/UseState";
import {Filter} from "./04_Filter/Filter";
import {Counter} from "./05_Counter/Counter";
import {InputTask} from "./06_Input-task/06_Input";

/*
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponent";
import {TopCarsComponent} from "./01_Map-task/TopCarsComponent";
*/

export type FilterPropsType = 'all' | 'rubles' | 'dollars';

function App() {
    let [money] = useState([
        {banknots: 'dollars', nominal: 100, number: ' a1234567890'},
        {banknots: 'dollars', nominal: 50, number: ' z1234567890'},
        {banknots: 'rubles', nominal: 100, number: ' w1234567890'},
        {banknots: 'dollars', nominal: 100, number: ' e1234567890'},
        {banknots: 'dollars', nominal: 50, number: ' c1234567890'},
        {banknots: 'rubles', nominal: 100, number: ' r1234567890'},
        {banknots: 'dollars', nominal: 50, number: ' x1234567890'},
        {banknots: 'rubles', nominal: 50, number: ' v1234567890'},
    ]);

    const [filter, setFilter] = useState<FilterPropsType>('all');

    let currentMoney = money;

    if (filter === 'rubles') {
        currentMoney = money.filter(filterMoney => filterMoney.banknots === 'rubles');
    }
    if (filter === 'dollars') {
        currentMoney = money.filter(filterMoney => filterMoney.banknots === 'dollars');
    }

    const onClickFilterHandler = (current: FilterPropsType) => {
        setFilter(current)
    }

    return (
        <div className={'App'}>
            {/*<Filter onClickFilterHandler={onClickFilterHandler} currentMoney={currentMoney}/>*/}
            {/*<Counter/>*/}
            <InputTask />
        </div>
    );
}

export default App;
