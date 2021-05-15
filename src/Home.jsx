import React from "react";



   
const Home = () => {
        return (
        <>
            <section id="home" className="d-block align-items-center mt-4 pt-4 ">
                <div className="container-fluid mt-0 nav_bg  ">
                    <div className="row  ">
                        <div className="col-10   mx-auto">
                            <div className="row mb-5">
                                <div className="col-md-6
                                                pt-lg-0 order-1
                                                d-block 
                                                order-lg-1 d-flex 
                                                justify-content-center 
                                                flex-column">
                                    <h1 >
                                    Better Solution for 
                                    <strong className="brand-name"> Your Business</strong>
                                    
                                    </h1>
                                    <h2 className="my-3 text-primary">
                                    Lorem ipsum dolor sit amet 
                                    consectetur adipisicing elit.
                                    </h2>
                                    <p>
                                    Mollitia voluptates excepturi possimus
                                    cupiditate aperiam accusamus, corrupti
                                    eveniet sapiente.Lorem ipsum dolor sit
                                    amet consectetur adipisicing elit.
                                    </p>
                                    <div className="mt-3">
                                        <a exact to="#services" 
                                        className="btn-get-Started mx-3">
                                        Get Started</a>
                                        <a exact to="#contact" 
                                        className="btn-get-Started mt-3 mx-3">
                                        Contact us</a>
                                    </div>
                                </div>
                                <div className="col-md-6 
                                                order-2 
                                                order-lg-2 
                                                home-img mt-1">  
                                    <img src="https://labhansh-website-reactjs-01.herokuapp.com/images/img-1.png"
                                    className="img-fluid animated" 
                                    alt="image" />
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        );
    };
export default Home;    