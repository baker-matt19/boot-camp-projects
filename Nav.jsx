import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../App.css";
// import LogIn from "./LogIn";
// import SignUp from "./SignUp";

const Nav = (props) => {

    const [links, setLinks] = useState(false); // hook to set display of the links in my hamburger menu

    // function to animate my hamburger menu
    const animater = (e) => {
        // changes class of mobileLinkDiv to change
        if(e.target.parentElement.id === "mobileLinkDiv") {
            e.target.parentElement.classList.toggle("change");
            // setting the display of the hamburger links
            if(links) {
                setLinks(false);
            }
            else setLinks(true);
        }
        
    }

    return (
        <div id="navDiv">
            

            <div id="mobileLinkDiv" onClick={animater}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>

                <div id="myLinks" className={links ? "displayFlex" : "displayNone"}>
                <Link to="home" className="text-dark link">Home</Link>
                <Link to="recipes" className="text-dark link">Recipes</Link>
                <Link to="contact" className="text-dark link">Contact</Link>
                </div>

            </div>

            <div id="linkDiv" className={props.linkDiv === true ? 'displayFlex' : 'displayNone'}>
                <Link to="home" className="text-dark link">Home</Link>
                <Link to="recipes" className="text-dark link">Recipes</Link>
                
                <Link to="contact" className="text-dark link">Contact</Link>
            </div>

        </div>
    )
}

export default Nav;