import React from 'react';
import {Link} from "react-router-dom";
import useCourses from "../helpers/useCourses";

const Courses = () => {

    const {isShowMoreButtonVisible,list,setListSize} = useCourses();
    return (
       <>
           <section className="heading-link">
               <h3>our courses</h3>
               <p><Link to="/home">home</Link> / courses </p>
           </section>

           <section className="courses">

               <h1 className="heading"> our famous courses </h1>

               <div className="box-container">

                   {list.map((listItem,index) => {
                       const {img,category,name,description,modulesAmount,duration} = listItem;
                       return (
                       <div key={index} className="box">
                           <div className="image">
                               <img src={img} alt=""/>
                               <h3>{category}</h3>
                           </div>
                           <div className="content">
                               <h3>{name}</h3>
                               <p>{description}</p>
                               <a href="#" className="btn">read more</a>
                               <div className="icons">
                                   <span> <i className="fas fa-book"/> {modulesAmount} modules </span>
                                   <span> <i className="fas fa-clock"/> {duration} hours </span>
                               </div>
                           </div>
                       </div>
                       )
                   })}
               </div>
               {isShowMoreButtonVisible && (
                   <div onClick={setListSize} className="load-more">
                       <div className="btn">load more</div>
                   </div>
               )}
           </section>
       </>
    );
};

export default Courses;
