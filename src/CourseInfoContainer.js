import React from "react";
import CourseInfo from "./CourseInfo";
import courseData from "./courseData";

export default function CourseInfoContainer(){
    var courseInfo = courseData.map((data) => <CourseInfo data={data} />)

    return(
        <div>
            {courseInfo}
        </div>
    )



}