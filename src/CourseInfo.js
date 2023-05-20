import React from "react";

export default function CourseInfo(props){
    return(
        <div className="infoContainer">
            <h2>{props.data.courseName}</h2>
            <div className="info">
                <p className="par">Par: {props.data.parTotal}</p>
                <p className="location">Location: {props.data.courseLocation}</p>
            </div>
        </div>
    )



}