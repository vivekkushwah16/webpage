import React from "react";
import {Route,Switch,Redirect,} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import Navbar from "./Navbar";
import Team from "./Team";
import Footer from "./Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
const App = () => {
    return(
        <>
            <Navbar/>
            <Home/>
            <About/>
            <Services/>
            <Team/>
            <Contact/>
            <Footer/>
            
        </>
    ); 
} 
export default App;
