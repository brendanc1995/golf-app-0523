

export default function CourseTiles(props){
    return(
        
        <div className="course-container">
            <h2>{props.info.courseName}</h2>
            <div className="course-info">
                <p>{props.info.description}</p>
                <p>Par: {props.info.par}</p>
            </div>
        </div>

    )
}