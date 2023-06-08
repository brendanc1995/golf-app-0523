export default function CourseTiles(props){
    return(
        <div className="course-container">
            <h2>{props.info.courseName}</h2>
            <p>{props.info.description}</p>
        </div>
    )
}