import React from "react";


export default function Navigation(){
    const [isOpen, setIsOpen] = React.useState(false)

    function navOC(){
        setIsOpen(prevState => !prevState)
    }



    return(
        <>
            <h1 onClick={navOC} className="hamburger">{isOpen ? "Close" : "Open"}</h1>
            <div className={`navigation-container ${isOpen ? "open" : "close"}`}>
                
                <ul>
                    <li><a>View Courses</a></li>
                </ul>



            </div>
        </>
    )
}