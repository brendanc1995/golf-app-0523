import React from "react";

export default function CourseInfo(props){
    return(
        <div>
            <h2>{props.courseName}</h2>
            <p>{props.parTotal}</p>
            <p>{props.courseLocation}</p>
        </div>
    )



}