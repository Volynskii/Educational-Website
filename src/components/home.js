import React,{useState} from 'react';
import imgSlide1 from "../images/home-slide-1.jpg";
import imgSlide2 from "../images/home-slide-2.jpg";
import imgSlide3 from "../images/home-slide-3.jpg";
import SimpleCarousel from "./simpleCarousel";

const Home = () => {
    const [currentActiveItem,setCurrentActiveItem] = useState(1);
    return (
        <>
            <section className="home">

                <div className="swiper home-slider">

                    <div className="swiper-wrapper">
<SimpleCarousel
    show={1}
    infiniteLoop
    setCurrentActiveItem={setCurrentActiveItem}
    dots
>
                        <section className="swiper-slide slide"
                                 style={{background: `url(${imgSlide1}) no-repeat`}}
                        >
                            <div className="content">
                                <h3>the best courses you will find find here!</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore
                                    dolore unde, quidem corrupti?</p>
                                <a href="#" className="btn">get started</a>
                            </div>
                        </section>

                        <section className="swiper-slide slide"
                                 style={{background: `url(${imgSlide2}) no-repeat`}}
                        >
                            <div className="content">
                                <h3>the best courses you will find find here!</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore
                                    dolore unde, quidem corrupti?</p>
                                <a href="#" className="btn">get started</a>
                            </div>
                        </section>

                        <section className="swiper-slide slide"
                                 style={{background: `url(${imgSlide3}) no-repeat`}}
                        >
                            <div className="content">
                                <h3>the best courses you will find find here!</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore
                                    dolore unde, quidem corrupti?</p>
                                <a href="#" className="btn">get started</a>
                            </div>
                        </section>

</SimpleCarousel>
                    </div>

                    <div className="swiper-pagination"></div>

                </div>

            </section>
            </>
    );
};

export default Home;
