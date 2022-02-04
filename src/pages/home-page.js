import React from 'react';
import Home from "../components/home";
import Subjects from "../components/subjects";
import HomeCourses from "../components/home-courses";

const HomePage = () => {
    return (
        <>
            <Home/>
            <Subjects/>
            <HomeCourses/>
            </>
    );
};

export default HomePage;
