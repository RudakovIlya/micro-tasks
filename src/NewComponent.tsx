import React from "react";

type NewComponentPropsType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number,
    name: string,
    age: number,
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <ul>
            {props.students.map((objectFromStudentArray, index) => {
                return (
                    <li key={objectFromStudentArray.id}>
                        <span>name: {objectFromStudentArray.name} </span>
                        <span>age: {objectFromStudentArray.age}</span>
                    </li>
                )
            })}
        </ul>
    )
};