import React from 'react';
import imgSubj1 from "../images/subject-icon-1.png";
import imgSubj2 from "../images/subject-icon-2.png";
import imgSubj3 from "../images/subject-icon-3.png";
import imgSubj4 from "../images/subject-icon-4.png";
import imgSubj5 from "../images/subject-icon-5.png";
import imgSubj6 from "../images/subject-icon-6.png";

const Subjects = () => {
    return (
        <>
            <section className="subjects">

                <h1 className="heading">our popular subjects</h1>

                <div className="box-container">

                    <div className="box">
                        <img src={imgSubj1} alt=""/>
                            <h3>graphic design</h3>
                            <p>12 modules</p>
                    </div>

                    <div className="box">
                        <img src={imgSubj2} alt=""/>
                            <h3>mathemetics</h3>
                            <p>12 modules</p>
                    </div>

                    <div className="box">
                        <img src={imgSubj3} alt=""/>
                            <h3>teaching</h3>
                            <p>12 modules</p>
                    </div>

                    <div className="box">
                        <img src={imgSubj4} alt=""/>
                            <h3>development</h3>
                            <p>12 modules</p>
                    </div>

                    <div className="box">
                        <img src={imgSubj5} alt=""/>
                            <h3>science</h3>
                            <p>12 modules</p>
                    </div>

                    <div className="box">
                        <img src={imgSubj6} alt=""/>
                            <h3>engineering</h3>
                            <p>12 modules</p>
                    </div>

                </div>

            </section>
            </>
    );
};

export default Subjects;
