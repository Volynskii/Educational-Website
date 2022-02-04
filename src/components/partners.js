import React from 'react';
import imgPartner1 from "../images/partner-logo-1.png";
import imgPartner2 from "../images/partner-logo-2.png";
import imgPartner3 from "../images/partner-logo-3.png";
import imgPartner4 from "../images/partner-logo-4.png";
import imgPartner5 from "../images/partner-logo-5.png";

const Partners = () => {
    return (
       <>
           <section className="logo-container">
               <div className="swiper logo-slider">
                   <div className="swiper-wrapper">
                       <div className="swiper-slide"><img src="images/partner-logo-1.png" alt=""/></div>
                       <div className="swiper-slide"><img src="images/partner-logo-2.png" alt=""/></div>
                       <div className="swiper-slide"><img src="images/partner-logo-3.png" alt=""/></div>
                       <div className="swiper-slide"><img src="images/partner-logo-4.png" alt=""/></div>
                       <div className="swiper-slide"><img src="images/partner-logo-5.png" alt=""/></div>
                   </div>
               </div>
           </section>
           </>
    );
};

export default Partners;
