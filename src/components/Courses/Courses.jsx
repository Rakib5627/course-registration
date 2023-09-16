import { useEffect, useState } from 'react'
import Course from '../Course/Course';
import PropTypes from 'prop-types';

const Courses = ({handleAddToList}) => {
    const [courses, setCourses] = useState([])

    useEffect( () => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))

    } , [])

    return (
        <div>

            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-3'>
            {
                courses.map(course => <Course
                key={course.id}
                course = {course}
                handleAddToList={handleAddToList}
                ></Course>)
            }
            </div>
           
        </div>
    );
};

Courses.propTypes = {
    handleAddToList: PropTypes.func
}

export default Courses;