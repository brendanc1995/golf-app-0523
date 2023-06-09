import { useParams } from "react-router-dom"
import React from "react"


export default function Course(){
    const {courseId} = useParams()


    const [courses, setCourses] = React.useState([]); 

    React.useEffect(() => {
        // Fetch data from the server
        fetch('http://localhost:5000/')
          .then(response => response.json())
          .then(data => {
            // Set the fetched data in the state
            const foundCourse = data.find(course => course._id === courseId);
            setCourses(foundCourse);
          })
          //.catch(error => {
            //console.error('Error:', error);
         // });
      }, [courseId]);
      
      


    console.log(courses._id = courseId)

    return(
        <div>
            <h1>{courses.courseName}</h1>
            <p>Hole 1: <strong>{courses.hole1}</strong></p>
            <p>Hole 2: <strong>{courses.hole2}</strong></p>
            <p>Hole 3: <strong>{courses.hole3}</strong></p>
            <p>Hole 4: <strong>{courses.hole4}</strong></p>
            <p>Hole 5: <strong>{courses.hole5}</strong></p>

            
        </div>
    )



}