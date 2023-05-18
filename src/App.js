import React, {useEffect, useState} from "react";

function App() {

  const [courses, setCourses] = useState([{
    courseName: '',
    hole1: '',
    hole2: ''
  }])

  useEffect(() => {
    fetch("/course").then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes => setCourses(jsonRes))
  })


  return (
    <div className="App">
    <h1>This is the beginning of my golf app</h1>
    {courses.map(course =>
      <div>
        <h1>{course.name}</h1>
        <h1>{course.hole1}</h1>
        <h1>{course.hole2}</h1>
      </div>
    )}
    </div>
  );
}

export default App;
