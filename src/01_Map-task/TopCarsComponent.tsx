import React from "react";
import styles from './car.module.css'


type TopCar = {
    manufacturer: string,
    model: string,
}

type TopCarsComponentType = {
    cars: Array<TopCar>
}

export const TopCarsComponent = (props: TopCarsComponentType) => {
    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th className={styles.th}>manufacturer</th>
                <th>model</th>
            </tr>
            </thead>
            <tbody>
            {
                props.cars.map((c, index) => {
                    return (
                        <tr key={index}>
                            <td className={styles.td}>{`${index + 1} ${c.manufacturer}`}</td>
                            <td className={styles.td}>{c.model}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
};