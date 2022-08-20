
import React from 'react';
import Service from './Service'
import './services.css'

const Services = () => {
    const [courses, setCourses] = React.useState([]);
    React.useEffect(() => {
        fetch('courses.json').then(res => res.json()).then(course => setCourses(course))
    }, [])
    return (
        <div>
            <div className='services-container'>
                {
                    courses.map(c => <Service key={c._id} course={c} />)
                }
            </div>
        </div>
    );
};

export default Services;