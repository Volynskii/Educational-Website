import React from 'react';
import img1 from "../images/pic-1.png";
import img2 from "../images/pic-2.png";
import img3 from "../images/pic-3.png";
import img4 from "../images/pic-4.png";
import img5 from "../images/pic-5.png";
import img6 from "../images/pic-6.png";

const StudentReviews = () => {
    return (
       <>
           <section className="reviews">

               <h1 className="heading"> our students review </h1>

               <div className="swiper reviews-slider">

                   <div className="swiper-wrapper">

                       <div className="swiper-slide slide">
                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum
                               libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi
                               quia! Cumque, tempora sit.</p>
                           <img src={img1} alt=""/>
                               <h3>john deo</h3>
                               <div className="stars">
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star-half-alt"/>
                               </div>
                       </div>

                       <div className="swiper-slide slide">
                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum
                               libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi
                               quia! Cumque, tempora sit.</p>
                           <img src={img2} alt=""/>
                               <h3>john deo</h3>
                               <div className="stars">
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star-half-alt"/>
                               </div>
                       </div>

                       <div className="swiper-slide slide">
                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum
                               libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi
                               quia! Cumque, tempora sit.</p>
                           <img src={img3} alt=""/>
                               <h3>john deo</h3>
                               <div className="stars">
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star-half-alt"/>
                               </div>
                       </div>

                       <div className="swiper-slide slide">
                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum
                               libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi
                               quia! Cumque, tempora sit.</p>
                           <img src={img4} alt=""/>
                               <h3>john deo</h3>
                               <div className="stars">
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star-half-alt"/>
                               </div>
                       </div>

                       <div className="swiper-slide slide">
                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum
                               libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi
                               quia! Cumque, tempora sit.</p>
                           <img src={img5} alt=""/>
                               <h3>john deo</h3>
                               <div className="stars">
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star-half-alt"/>
                               </div>
                       </div>

                       <div className="swiper-slide slide">
                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum
                               libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi
                               quia! Cumque, tempora sit.</p>
                           <img src={img6} alt=""/>
                               <h3>john deo</h3>
                               <div className="stars">
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star"/>
                                   <i className="fas fa-star-half-alt"/>
                               </div>
                       </div>

                   </div>

               </div>

           </section>
           </>
    );
};

export default StudentReviews;
