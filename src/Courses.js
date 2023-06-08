//import { response } from 'express';
import React from 'react'
import CourseTiles from './components/CourseTiles';

export default function Courses(){
    const [courses, setCourses] = React.useState([]); 
    React.useEffect(() => {
        // Fetch data from the server
        fetch('http://localhost:5000/')
          .then(response => response.json())
          .then(data => {
            // Set the fetched data in the state
            setCourses(data);
          })
          //.catch(error => {
            //console.error('Error:', error);
         // });
      }, []);
      const courseMap = courses.map(function(info){
        return(
            <CourseTiles info={info}/>
        )
    })

   console.log(courses)
    
    return(
        <div>
      <h1>Course List</h1>
      {courseMap}
    </div>
    )
}