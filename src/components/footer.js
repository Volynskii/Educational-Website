import React from 'react';

const Footer = () => {
    return (
       <>
           <section className="footer">

               <div className="box-container">

                   <div className="box">
                       <h3><i className="fas fa-lightbulb"/> educa </h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, voluptatem.</p>
                       <div className="share">
                           <a href="#" className="fab fa-facebook-f"/>
                           <a href="#" className="fab fa-twitter"/>
                           <a href="#" className="fab fa-instagram"/>
                           <a href="#" className="fab fa-linkedin"/>
                       </div>
                   </div>

                   <div className="box">
                       <h3>quick links</h3>
                       <a href="home.html" className="link">home</a>
                       <a href="about.html" className="link">about</a>
                       <a href="courses.html" className="link">courses</a>
                       <a href="contact.html" className="link">contact</a>
                   </div>

                   <div className="box">
                       <h3>useful links</h3>
                       <a href="#" className="link">help center</a>
                       <a href="#" className="link">ask questions</a>
                       <a href="#" className="link">send feedback</a>
                       <a href="#" className="link">private policy</a>
                       <a href="#" className="link">terms of use</a>
                   </div>

                   <div className="box">
                       <h3>newsletter</h3>
                       <p>subscribe for latest upadates</p>
                       <form action="">
                           <input type="email" name="" placeholder="enter your email" id="" className="email"/>
                               <input type="submit" value="subscribe" className="btn"/>
                       </form>
                   </div>

               </div>

               <div className="credit"> created by <span>Anton Wolynskii</span> | all rights reserved!</div>

           </section>
           </>
    );
};

export default Footer;
