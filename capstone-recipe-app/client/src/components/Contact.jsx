import React, { useState } from "react";
import Footer from "./Footer";

const Contact = (props) => {

    const [issue, setIssue] = useState(""); // creating a hook value to save the issue put in by the user

    // my function that will use a POST fetch to post the issue to the database once the issue is submitted
    const handleSubmit = () => {

        let { username } = props.userObj; // setting username from the userObj 

        const headerOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ issue, username })
        }

        fetch('/api/issues', headerOptions)
            .then(res => res.json())
            .then(d => {
                console.log(d);
                props.addIssueHandler(false);
            })

    }


    return (
        <div id="contactDiv">

            {/* ========ISSUE=MODAL======== */}
            <div id="issueModal" className={props.addIssue ? "displayFlex myModal" : "displayNone"}>

                <div id="issueModalDiv" className="myModalDiv">

                    <h3>Is this the issue you wish to submit?</h3>
                    <p id="issueText" className="modalText">{props.issue}</p>

                    <div className="modalBtnDiv">
                        <button className="modalBtn btn btn-deafault" onClick={handleSubmit}>Yes</button>
                        <button className="modalBtn btn btn-default" onClick={() => props.addIssueHandler(false)}>No</button>
                    </div>


                </div>

            </div>

            <div id="contactContentDiv">

                <h1 id="contactHead">Contact Us</h1>
                <p id="contactText">Pretty much self explanatory...</p>

                <div id="contactFlexDiv">

                    {/* ISSUES */}
                    <div id="issueDiv">

                        <h4 id="issueHead">Send us your issue and we will contact you shortly...</h4>

                        <textarea name="issue" id="issueTA" onChange={(e) => setIssue(e.target.value)}></textarea>

                        <button id="issueBtn" className="btn btn-default" onClick={() => props.addIssueHandler(true)}>Submit Issue</button>
                    </div>

                    {/* INFO */}
                    <div id="contactInfoDiv">
                        <h3>email the moderator:</h3>
                        <h4 className="contactInfo">matt.sheetz712@gmail.com</h4>
                        <h3>Or go ahead and call him... why not?</h3>
                        <h4 className="contactInfo">208-525-2632</h4>
                        <div id="contactLinkDiv">
                            <a href="">Facebook</a>
                            <a href="">Twitter</a>
                            <a href="">LinkedIn</a>
                            <a href="">GitHub</a>
                        </div>

                    </div>

                </div>


            </div>

            <Footer />

        </div>
    )
}

export default Contact;