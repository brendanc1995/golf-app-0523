import React from "react";
import {Route, Routes, Link} from "react-router-dom"
import Home from "../Home";
import Courses from "../Courses";


export default function Navigation(){
    return(
        <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </>
    )
}