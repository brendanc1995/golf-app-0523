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
      

    return(
        <div>
            <h1>{courses.courseName}</h1>
            <div className="content-container course-info-container">
              <p>Hole 1: <strong>{courses.hole1}</strong></p>
              <p>Hole 2: <strong>{courses.hole2}</strong></p>
              <p>Hole 3: <strong>{courses.hole3}</strong></p>
              <p>Hole 4: <strong>{courses.hole4}</strong></p>
              <p>Hole 5: <strong>{courses.hole5}</strong></p>
              <p>Hole 6: <strong>{courses.hole6}</strong></p>
              <p>Hole 7: <strong>{courses.hole7}</strong></p>
              <p>Hole 8: <strong>{courses.hole8}</strong></p>
              <p>Hole 9: <strong>{courses.hole9}</strong></p>
              <p>Hole 10: <strong>{courses.hole10}</strong></p>
              <p>Hole 11: <strong>{courses.hole11}</strong></p>
              <p>Hole 12: <strong>{courses.hole12}</strong></p>
              <p>Hole 13: <strong>{courses.hole13}</strong></p>
              <p>Hole 14: <strong>{courses.hole14}</strong></p>
              <p>Hole 15: <strong>{courses.hole15}</strong></p>
              <p>Hole 16: <strong>{courses.hole16}</strong></p>
              <p>Hole 17: <strong>{courses.hole17}</strong></p>
              <p>Hole 18: <strong>{courses.hole18}</strong></p>
            </div>
            <div className="course-total-container">
              <p className="course-total">Total: <strong>{courses.par}</strong></p>
            </div>
            
        </div>
    )



}