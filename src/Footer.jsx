import React from "react";
import { a } from "react-router-dom";
    const Footer = () => {
        return (
        <>
         <footer className="w-100 p-3 mb-2 bg-secondary text-white d-block border border-primary">
            <div className="container text-left">
            <br/>
                <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-6 text-left">
                        <h4 className="text-dark">Example</h4>
                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Reiciendis provident
                        rerum ipsa vero sapiente dolore, qui voluptatibus.</p>
                        <hr/>

                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <ul className="list-unstyled mx-auto">
                        <li className="d-block">
                        <a  href="#services" 
                            className="card-link text-dark">
                            <h4>Services</h4>
                        </a>
                        </li>
                        <li className="d-block">
                        <a  href="#services" className="card-link text-dark">Web Development</a>
                        </li>
                        <li className="d-block">
                        <a  href="#services" className="card-link text-dark">
                        Data Analytics</a>
                        </li>
                        <li className="d-block">
                        <a  href="#services" className="card-link text-dark">
                        Software Development</a>
                        </li>
                        <li className="d-block">
                        <a  href="#services" className="card-link text-dark">
                        App Development</a>
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <ul className="list-unstyled mx-auto">
                        <li className="d-block">
                        <a  href="#about" className="card-link text-dark">
                        <h4>About</h4>
                        </a>
                        </li>
                        <li className="d-block">
                        <a  href="/" className="card-link text-dark">Who are we ?</a>
                        </li>
                        <li className="d-block">
                        <a  href="/" className="card-link text-dark">Why us ?</a>
                        </li>
                        <li className="d-block">
                        <a  href="#services" className="card-link text-dark">
                        Wordpress Development</a>
                        </li>
                        <li className="d-block"><a  href="#services" className="card-link text-dark">
                        Graphics Designing</a>
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <ul className="list-unstyled mx-auto">
                        <li className="d-block">
                        <a  href="#about" className="card-link text-dark">
                        <h4>Terms</h4>
                        </a>
                        </li>
                        <li className="d-block">
                        <a  href="/" className="card-link text-dark">
                        Terms and condition</a>
                        </li>
                        <li className="d-block">
                        <a  href="/" className="card-link text-dark">Privacy Policy</a>
                        </li>
                        <li className="d-block">
                        <a  href="/" className="card-link text-dark">
                        Team</a>
                        </li>
                        <li className="d-block">
                        <a  href="#contact" className="card-link text-dark">
                        Contact us</a>
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-6">
                        <h4 className="text-dark">Subscribtion </h4>
                        <p className="text-dark">Get news letters and updates</p>
                        <form className="input-group-append">
                        <input type="email" className="input-group-text
                        bg-white text-left text-dark rounded-0 w-75"
                        placeholder="Enter Email"/>
                        <button type="button" class="btn btn-dark">Submit</button>
                        </form>
                        <p className="text-dark d-inline-block  ">Follow us : </p>
                        <a  href="/" className="my-3 mx-1 d-inline-block">
                        <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" 
                        className="text-dark"
                        width="50px"
                        height="50px"
                        alt="facebook-img"/>
                        </a>
                        <a  href="/" className="my-3 mx-1 d-inline-block">
                        <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png" 
                          width="50px"
                        height="50px"
                        className="text-dark " 
                        alt="twitter-img"/>
                        </a>
                        <a  href="/" className="my-3 mx-1 d-inline-block">
                        <img src="https://i.pinimg.com/originals/05/da/34/05da3431471058c803afacb2f5483f7b.png"
                         className="text-dark"  width="50px"
                        height="50px" alt="linkedin-img"/>
                        </a>
                    </div>
                </div>
                 <br/>
            <div className="text-center">
                    <p className="text-dark d-inline-block mx-2">

                    Copyright @Exapmle 2021-2030</p>
                   
            </div>
        </div>
    </footer>
                </>);
    };
export default Footer;    