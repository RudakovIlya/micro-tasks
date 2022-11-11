import React, {useState} from 'react';
import './App.css';
import {Button} from "./02_Button-task/Button";
import {State} from "./03_UseState/UseState";
import {Filter} from "./Filter/Filter";

/*
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponent";
import {TopCarsComponent} from "./01_Map-task/TopCarsComponent";
*/

function App() {
    /*
        // let [students, setStudents] = useState([
        //     {id: 1, name: "James", age: 8},
        //     {id: 2, name: "Robert", age: 18},
        //     {id: 3, name: "John", age: 28},
        //     {id: 4, name: "Michael", age: 38},
        //     {id: 5, name: "William", age: 48},
        //     {id: 6, name: "David", age: 58},
        //     {id: 7, name: "Richard", age: 68},
        //     {id: 8, name: "Joseph", age: 78},
        //     {id: 9, name: "Thomas", age: 88},
        //     {id: 10, name: "Charles", age: 98},
        //     {id: 11, name: "Christopher", age: 100},
        //     {id: 12, name: "Charles", age: 22},
        //     {id: 13, name: "Christopher", age: 13},
        // ]);

        // let [topCars, setTopCars] = useState([
        //     {manufacturer: 'BMW', model: 'm5cs'},
        //     {manufacturer: 'Mercedes', model: 'e63s'},
        //     {manufacturer: 'Audi', model: 'rs7'},
        //     {manufacturer: 'Lada', model: 'rs8'},
        //     {manufacturer: 'Skoda', model: 'rs9'},
        //     {manufacturer: 'Niva', model: 'rs1'},
        // ]);

    */

    /*
        let [a, setA] = useState(1);
        const onClickHandler = () => {
            a++;
            setA(a);
        };

        const onClickReset = () => {
            a = 0;
            setA(a);
        }

        const onClickMin = () => {
            --a;
            setA(a);
        }

        if (a <= 0) {
            a = 1;
            setA(a);
        }
    */
    const [money, setMoney] = useState([
        {banknots: 'dollars', nominal: 100, number: ' a1234567890'},
        {banknots: 'dollars', nominal: 50, number: ' z1234567890'},
        {banknots: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknots: 'dollars', nominal: 100, number: ' e1234567890'},
        {banknots: 'dollars', nominal: 50, number: ' c1234567890'},
        {banknots: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknots: 'dollars', nominal: 50, number: ' x1234567890'},
        {banknots: 'ruble', nominal: 50, number: ' v1234567890'},
    ])

    let currentMoney = money.filter(filterMoney => filterMoney.banknots === 'ruble')

    return (
        <div className={'App'}>
            {/*    <Button/>
            <State/>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickReset}>null</button>
            <button onClick={onClickMin}>minus</button>*/}

            <ul>
                {
                    money.map((objFromMoneyArr, id) => {
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

        </div>
    );
}

export default App;
