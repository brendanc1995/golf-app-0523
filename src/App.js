import React from "react";
import CourseItem from "./CourseItem";
import sampleData from "./sampleData";

function App() {
  const courseData = sampleData.map((data) => <CourseItem data={data}/>)

  //const skiInfo = skiData.map((info) => <Product info={info}/>)

  return (
    <div className="App">
    <h1>This is the beginning of my golf app</h1>
    {courseData}
    
    </div>
  )
}

export default App;
