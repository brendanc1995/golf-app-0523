import React from 'react'
import CourseTiles from './components/CourseTiles';
import {NavLink} from "react-router-dom"

export default function Courses(){
    const [courses, setCourses] = React.useState([]); 
    React.useEffect(() => {
        // Fetch data from the server
        fetch('http://localhost:5000/')
          .then(response => response.json())
          .then(data => {
            setCourses(data);
          })
          //.catch(error => {
            //console.error('Error:', error);
         // });
      }, []);
      const courseMap = courses.map(function(info){
        return(
            <NavLink to={`/courses/${info._id}`}>
                <CourseTiles info={info}/>
            </NavLink>
        )
    })

   console.log(courses)
    
    return(
        <>
        <div>
      <h1>Course List</h1>
      {courseMap}
    </div>



</>
    )
}