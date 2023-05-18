import React from "react";
import CourseItem from "./CourseItem";
import sampleData from "./sampleData";

function App() {
<<<<<<< HEAD
  const courseData = sampleData.map((data) => <CourseItem data={data}/>)

  //const skiInfo = skiData.map((info) => <Product info={info}/>)
=======

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

>>>>>>> parent of 5592cca... Removed Server

  return (
    <div className="App">
    <h1>This is the beginning of my golf app</h1>
<<<<<<< HEAD
    {courseData}
    
=======
    {courses.map(course =>
      <div>
        <h1>{course.name}</h1>
        <h1>{course.hole1}</h1>
        <h1>{course.hole2}</h1>
      </div>
    )}
>>>>>>> parent of 5592cca... Removed Server
    </div>
  )
}

export default App;
