import React from 'react';
import './Course.css';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import CourseInfo from '../CourseInfo/CourseInfo';
import fakeData from '../../fakeData/shuffle';
const Course = () => {
    const courseToShow = fakeData.slice(0 , 15);

    const [courses, setCourses] = useState(courseToShow);
    const [cart, setCart] = useState([]);
    const handleAddCart = (courses) =>{
        const newCart = [...cart, courses];
        setCart(newCart);
    }
   
        return (
        <div className="container-fluid d-flex">
            <div className="course-data row">
            {
                courses.map(
                    course => <CourseInfo course={course}
                    handleAddCart={handleAddCart}></CourseInfo>
                    )
            }
            </div>
            <div>
                <Cart cart={cart}></Cart>   
            </div>
        </div>
    );
};

export default Course;