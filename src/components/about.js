import React from 'react';
import imgAbout from "../images/about-img.jpg"
import imgIcon1 from "../images/about-icon-1.png";
import imgIcon2 from "../images/about-icon-2.png";
import imgIcon3 from "../images/about-icon-3.png";

const About = () => {
    return (
        <>
            <section className="about">

                <div className="image">
                    <img src={imgAbout} alt=""/>
                </div>

                <div className="content">
                    <h3 className="about-title">we have best courses for you</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic magnam fugit exercitationem
                        neque, quae laboriosam natus. Ut maxime assumenda facere ea quasi accusamus dolores delectus
                        tempora animi, expedita iste.</p>
                    <div className="icons-container">
                        <div className="icons">
                            <img src={imgIcon1} alt=""/>
                                <h3>350+</h3>
                                <span>courses</span>
                        </div>
                        <div className="icons">
                            <img src={imgIcon2} alt=""/>
                                <h3>1200+</h3>
                                <span>students</span>
                        </div>
                        <div className="icons">
                            <img src={imgIcon3} alt=""/>
                                <h3>10+</h3>
                                <span>awards</span>
                        </div>
                    </div>
                </div>

            </section>
            </>
    );
};

export default About;
