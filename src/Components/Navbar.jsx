import React from "react";
    const Navbar = () => {
        return(
                <>
                <div className="container-fluid nav_bg fixed-top ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid  justify-content-between">
                                <a className="navbar-brand" 
                                    >Welcome</a>
                                <button className="navbar-toggler" 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target="#navbarSupportedContent" 
                                        aria-controls="navbarSupportedContent" 
                                        aria-expanded="true" 
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse  justify-content-end" 
                                    id="navbarSupportedContent">
                                <ul className="navbar-nav mb-2 mb-lg-0 ">
                                    <li className="nav-item">
                                    <a href="#home" activeClassName="menu_active" className="nav-link" 
                                    aria-current="page" 
                                    >HOME</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="#about" activeClassName="menu_active" className="nav-link" >ABOUT</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="#services" activeClassName="menu_active" className="nav-link">SERVICES</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="#team" activeClassName="menu_active" className="nav-link">TEAM</a>
                                    </li>
                                    <li>
                                    <a href="#contact" className="nav-link">
                                    <button className="btn btn-sm btn-outline-secondary" type="button">Contact us</button>
                                    </a>
                                    </li>
                                
                                </ul>
                                </div>
                                
                            </div>
                        </nav>
                        </div>
                    </div>
                </div>
                </>  
        );
    };
export default Navbar;    