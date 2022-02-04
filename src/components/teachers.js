import React,{useState} from 'react';
import imgTeacher1 from "../images/teacher-1.png";
import imgTeacher2 from "../images/teacher-2.png";
import imgTeacher3 from "../images/teacher-3.png";
import imgTeacher4 from "../images/teacher-4.png";
import imgTeacher5 from "../images/teacher-5.png";
import imgTeacher6 from "../images/teacher-6.png";
import SimpleCarousel from "./simpleCarousel";

const Teachers = () => {
    const [currentActiveItem,setCurrentActiveItem] = useState(1);
    return (
       <>
           <section className="teachers">

               <h1 className="heading">expert teachers</h1>

               <div className="swiper teachers-slider">

                   <div className="swiper-wrapper">
                       <SimpleCarousel
                           show={1}
                           infiniteLoop
                           setCurrentActiveItem={setCurrentActiveItem}
                           dots
                       >
                       <div className="swiper-slide slide">
                           <div className="image">
                               <img src={imgTeacher1} alt=""/>
                                   <div className="share">
                                       <a href="#" className="fab fa-facebook-f"/>
                                       <a href="#" className="fab fa-twitter"/>
                                       <a href="#" className="fab fa-instagram"/>
                                       <a href="#" className="fab fa-linkedin"/>
                                   </div>
                           </div>
                           <div className="content">
                               <h3>john deo</h3>
                               <span>expert tutor</span>
                           </div>
                       </div>

                       <div className="swiper-slide slide">
                           <div className="image">
                               <img src={imgTeacher2} alt=""/>
                                   <div className="share">
                                       <a href="#" className="fab fa-facebook-f"/>
                                       <a href="#" className="fab fa-twitter"/>
                                       <a href="#" className="fab fa-instagram"/>
                                       <a href="#" className="fab fa-linkedin"/>
                                   </div>
                           </div>
                           <div className="content">
                               <h3>john deo</h3>
                               <span>expert tutor</span>
                           </div>
                       </div>

                       <div className="swiper-slide slide">
                           <div className="image">
                               <img src={imgTeacher3} alt=""/>
                                   <div className="share">
                                       <a href="#" className="fab fa-facebook-f"/>
                                       <a href="#" className="fab fa-twitter"/>
                                       <a href="#" className="fab fa-instagram"/>
                                       <a href="#" className="fab fa-linkedin"/>
                                   </div>
                           </div>
                           <div className="content">
                               <h3>john deo</h3>
                               <span>expert tutor</span>
                           </div>
                       </div>

                       <div className="swiper-slide slide">
                           <div className="image">
                               <img src={imgTeacher4} alt=""/>
                                   <div className="share">
                                       <a href="#" className="fab fa-facebook-f"/>
                                       <a href="#" className="fab fa-twitter"/>
                                       <a href="#" className="fab fa-instagram"/>
                                       <a href="#" className="fab fa-linkedin"/>
                                   </div>
                           </div>
                           <div className="content">
                               <h3>john deo</h3>
                               <span>expert tutor</span>
                           </div>
                       </div>

                       <div className="swiper-slide slide">
                           <div className="image">
                               <img src={imgTeacher5} alt=""/>
                                   <div className="share">
                                       <a href="#" className="fab fa-facebook-f"/>
                                       <a href="#" className="fab fa-twitter"/>
                                       <a href="#" className="fab fa-instagram"/>
                                       <a href="#" className="fab fa-linkedin"/>
                                   </div>
                           </div>
                           <div className="content">
                               <h3>john deo</h3>
                               <span>expert tutor</span>
                           </div>
                       </div>

                       <div className="swiper-slide slide">
                           <div className="image">
                               <img src={imgTeacher6} alt=""/>
                                   <div className="share">
                                       <a href="#" className="fab fa-facebook-f"/>
                                       <a href="#" className="fab fa-twitter"/>
                                       <a href="#" className="fab fa-instagram"/>
                                       <a href="#" className="fab fa-linkedin"/>
                                   </div>
                           </div>
                           <div className="content">
                               <h3>john deo</h3>
                               <span>expert tutor</span>
                           </div>
                       </div>
                       </SimpleCarousel>

                   </div>

               </div>

           </section>
           </>
    );
};

export default Teachers;
