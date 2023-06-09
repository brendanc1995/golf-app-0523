import React from "react";
import Navigation from "./components/Navigation";
import {Route, Routes, Link} from "react-router-dom"
import Home from "./Home";
import Courses from "./Courses";
import Course from "./Course"

function App() {

  

  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<Course />} />
      </Routes>
    </>
  )
}

export default App;
