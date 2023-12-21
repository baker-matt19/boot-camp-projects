import React, { useState } from "react";
import Footer from "./Footer";

const Contact = (props) => {



    return (
        <div id="contactDiv">

            

            <div id="contactContentDiv">

                <h1 id="contactHead">Contact Us</h1>
                <p id="contactText">Pretty much self explanatory...</p>

                

                    

                    {/* INFO */}
                    <div id="contactInfoDiv">
                        <h3>email the moderator:</h3>
                        <h4 className="contactInfo">matt.sheetz19@gmail.com</h4>
                
                        <div id="contactLinkDiv">
                            <a href="https://www.facebook.com/profile.php?id=61553061699964" target="_blank" rel="noreferrer">Facebook</a>
                            <a href="https://twitter.com/MattSheetz19" target="_blank" rel="noreferrer">X</a>
                            <a href="https://www.linkedin.com/in/matthew-baker-7b163729a/" target="_blank" rel="noreferrer">Linkedin</a>
                            <a href="https://github.com/baker-matt19" target="_blank" rel="noreferrer">GitHub</a>
                        </div>

                    </div>

    


            </div>

            <Footer />

        </div>
    )
}

export default Contact;