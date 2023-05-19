import React from "react";

export default function CourseInfo(props){
    return(
        <div>
            <h2>{props.data.courseName}</h2>
            <p>{props.data.parTotal}</p>
            <p>{props.data.courseLocation}</p>
        </div>
    )



}