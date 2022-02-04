import React,{useState} from 'react';
import imgCourse1 from "../images/course-1-1.png";
import imgCourse2 from "../images/course-1-2.png";
import imgCourse3 from "../images/course-1-3.png";
import imgCourse4 from "../images/course-1-4.png";
import imgCourse5 from "../images/course-1-5.png";
import imgCourse6 from "../images/course-1-6.png";
import SimpleCarousel from "./simpleCarousel";

const HomeCourses = () => {
    const [currentActiveItem,setCurrentActiveItem] = useState(1);
    return (
        <>
            <section className="home-courses">

                <h1 className="heading"> our popular courses </h1>

                <div className="swiper home-courses-slider">

                    <div className="swiper-wrapper">
                        <SimpleCarousel
                            show={1}
                            infiniteLoop
                            setCurrentActiveItem={setCurrentActiveItem}
                            dots
                        >
                        <div className="swiper-slide slide">
                            <div className="image">
                                <img src={imgCourse1} alt=""/>
                                    <h3>web development</h3>
                            </div>
                            <div className="content">
                                <h3>web development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ratione?</p>
                                <a href="#" className="btn">read more</a>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="image">
                                <img src={imgCourse2} alt=""/>
                                    <h3>web development</h3>
                            </div>
                            <div className="content">
                                <h3>web development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ratione?</p>
                                <a href="#" className="btn">read more</a>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="image">
                                <img src={imgCourse3} alt=""/>
                                    <h3>web development</h3>
                            </div>
                            <div className="content">
                                <h3>web development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ratione?</p>
                                <a href="#" className="btn">read more</a>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="image">
                                <img src={imgCourse4} alt=""/>
                                    <h3>web development</h3>
                            </div>
                            <div className="content">
                                <h3>web development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ratione?</p>
                                <a href="#" className="btn">read more</a>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="image">
                                <img src={imgCourse5} alt=""/>
                                    <h3>web development</h3>
                            </div>
                            <div className="content">
                                <h3>web development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ratione?</p>
                                <a href="#" className="btn">read more</a>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="image">
                                <img src={imgCourse6} alt=""/>
                                    <h3>web development</h3>
                            </div>
                            <div className="content">
                                <h3>web development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ratione?</p>
                                <a href="#" className="btn">read more</a>
                            </div>
                        </div>
                        </SimpleCarousel>

                    </div>

                </div>

            </section>
            </>
    );
};

export default HomeCourses;
