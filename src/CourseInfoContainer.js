import React from "react";
import CourseInfo from "./CourseInfo";
import courseData from "./courseData";

export default function CourseInfoContainer(){
     const courseInfo = courseData.map((data) => <CourseInfo data={data} />)

    return(
        <div>
            <h1>Hello</h1>
            {courseInfo}
            <CourseInfo />
        </div>
    )



}