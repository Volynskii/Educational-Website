import React from 'react';
import imgContact from "../images/contact-img.png";

const Contact = () => {
    return (
       <>
           <section className="contact">

               <h1 className="heading"> get in touch </h1>

               <div className="icons-container">

                   <div className="icons">
                       <i className="fas fa-clock"/>
                       <h3>opening hours :</h3>
                       <p>00:07am to 00:06pm</p>
                   </div>

                   <div className="icons">
                       <i className="fas fa-phone"/>
                       <h3>phone :</h3>
                       <p>+123-456-7890</p>
                       <p>+111-222-3333</p>
                   </div>

                   <div className="icons">
                       <i className="fas fa-envelope"/>
                       <h3> email : </h3>
                       <p>shaikhanas@gmail.com</p>
                       <p>anasbhai@gmail.com</p>
                   </div>

                   <div className="icons">
                       <i className="fas fa-map"/>
                       <h3>address :</h3>
                       <p>mumbai, india - 400104</p>
                   </div>

               </div>

               <div className="row">

                   <div className="image">
                       <img src={imgContact} alt=""/>
                   </div>

                   <form action="">
                       <h3>send us a message</h3>
                       <input type="text" placeholder="name" className="box"/>
                           <input type="email" placeholder="email" className="box"/>
                               <input type="number" placeholder="phone" className="box"/>
                                   <textarea name="" className="box" placeholder="message" id="msg" cols="30"
                                             rows="10"/>
                                   <input type="submit" value="send message" className="btn"/>
                   </form>

               </div>

           </section>
           </>
    );
};

export default Contact;
