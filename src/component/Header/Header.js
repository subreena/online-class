import React from 'react';
// importing css style
import './Header.css'; 


const Header = () => {  
    return (

        <header>
            <h2 className="text-info m-3 text-center">Online Class Website</h2>
            <p className="text-secondary text-center">Best Online Courses For Skill Development at Home .Enroll Today!</p> 
            <br />
            <nav className="bg-info d-flex justify-content-center"> 
                <a href="/books">Books</a>
                <a href="/courses">Courses</a>
                <a href="/Others">About Us</a>
                <a href="/Others">Contact Us</a>
                <button className="btn btn-sm btn-light text-primary m-3">Sign Up</button>
                <button className="btn btn-sm btn-light text-primary m-3">Sign In</button>
            </nav>
        </header>
    );
};

export default Header;