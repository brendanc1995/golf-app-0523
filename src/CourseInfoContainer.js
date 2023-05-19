import React from "react";
import CourseInfo from "./CourseInfo";
import courseData from "./courseData";

export default function CourseInfoContainer(){
     const course = courseData.map((data) => <CourseInfo data={data}/>)

    return(
        <div>
            <h1>Hello</h1>
            {course}
            <CourseInfo />
        </div>
    )



}