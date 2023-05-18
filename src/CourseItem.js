import React from "react";

export default function CourseItem(props){
    return(
        <>
            <h1>{props.data.courseName}</h1>
            <p>{props.data.totalPar}</p>
            <p>{props.data.courseLocation}</p>
        </>
    )
    }