import React from "react";
import {Link} from "react-router-dom"


export default function Navigation(){
  const [menu, setMenu] = React.useState(false)

  function openMenu(){
    setMenu(prevState => !prevState)
  }
  function closeMenu(){
    setMenu(false)
  }

var navUl = document.getElementsByClassName("nav-ul")[0]
console.log(navUl.offsetHeight)

  
  return(
    <div>
      <nav>
        <i class="bi bi-list menu" onClick={openMenu}></i>
        <ul className={`nav-ul ${menu === true ? "open" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/courses" onClick={closeMenu}>Courses</Link></li>
        </ul>
      </nav>
    </div>
    )
}