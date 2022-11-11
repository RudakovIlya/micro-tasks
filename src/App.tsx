import React, {useState} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponent";
import {TopCarsComponent} from "./TopCarsComponent";

function App() {
    let [students, setStudents] = useState([
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
        {id: 12, name: "Charles", age: 22},
        {id: 13, name: "Christopher", age: 13},
    ]);

    let [topCars, setTopCars] = useState([
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs7'},
        {manufacturer: 'Lada', model: 'rs8'},
        {manufacturer: 'Skoda', model: 'rs9'},
        {manufacturer: 'Niva', model: 'rs1'},
    ]);

    return (
        <>
            {/*<Header titleForHeader={'New Header Title'}/>*/}
            {/*<Body titleForBody={'New Body Title'}/>*/}
            {/*<Footer titleForFooter={'New Footer Title'}/>*/}
            <NewComponent students={students}/>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <TopCarsComponent cars={topCars}/>
        </>
    );
}

export default App;
