import React, { useReducer } from 'react';
import '../App.css';

const SignUp = (props) => {

    const [signUpObj, setSignUpObj] = useReducer(
        (value, newDetails) => ({ ...value, ...newDetails}),
        {
        email: "",
        username: "",
        password: "",
        passwordTwo: "",
    }) // creating my signUp object to store all the info from the sign up form put in by the user and using the useReducer hook to set it

    // creating a handleSubmit that will be triggered when the form is submited
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // if the user inputs a value into the input that doesn't include a @ or a . then it will display a dismissable alert and set a red border around the input.
        if (!signUpObj.email.includes('@') && !signUpObj.email.includes('.')) {
            document.getElementById('emailInput').style.border = '2px red solid';
            document.getElementById('emailAlert').style.display = "block";

        }
        // if the user puts in a username with less than 4 characters it will display a dismissable alert and set a red border around the input
        if (signUpObj.username.length < 4) {
            document.getElementById('usernameInput').style.border = '2px red solid';
            document.getElementById('usernameAlert').style.display = "block";
        }
        // if the user puts in a password with less than 8 characters it will display a dismissable alert and set a red border around the input
        if (signUpObj.password.length < 8) {
            document.getElementById('passwordInput').style.border = '2px red solid';
            document.getElementById('passwordAlert').style.display = "block";
        }
        if (signUpObj.passwordTwo.length < 8) {
            document.getElementById('passwordTwoInput').style.border = '2px red solid';
            document.getElementById('passwordAlert').style.display = "block";
        }
        // if the 2 password inputs do not match it will display a dismissable alert and set a red border around the inputs 
        if (signUpObj.password !== signUpObj.passwordTwo) {
            document.getElementById('passwordInput').style.border = '2px red solid';
            document.getElementById('passwordTwoInput').style.border = '2px red solid';
            document.getElementById('passwordTwoAlert').style.display = "block";
        }


        // if all the inputs prerequisites are met it will use the fetch to add a user object to the db
        if (signUpObj.email.includes('@') && signUpObj.email.includes('.') && signUpObj.username.length >= 4 && signUpObj.password.length >= 8 && signUpObj.password === signUpObj.passwordTwo) {
            document.getElementById('emailInput').value = '';
            document.getElementById('usernameInput').value = '';
            document.getElementById('passwordInput').value = '';

            document.getElementById('signUpSuccess').style.display = 'block';

            const headerOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( signUpObj )
            }

            fetch('/api/users', headerOptions)
                .then(res => res.json())
                .then(d => console.log(d));
        }

       

    }

    // creating a signUp that hides the login and signup buttons and displays the sign up modal
    const signUp = (e) => {
        e.preventDefault();
        props.signUpDivHandler(true);
        props.signUpBtnHandler(false);
        props.logInBtnHandler(false);
        props.linkDivHandler(false); // setting linkDiv display to false
    }

    // creating the close button that closes the sign up
    const closeBtn = (e) => {
        e.preventDefault();
        props.signUpDivHandler(false);
        props.signUpBtnHandler(true);
        props.logInBtnHandler(true);
        // props.contentDivHandler(true); // setting contentDiv display to true
        props.linkDivHandler(true); // setting linkDiv display to true
    }


    console.log(signUpObj);
    

    return (
        <div className='signUp'>

            {/* sign up button located in the nav bar */}
            <button onClick={signUp} className={props.signUpBtn === true ? "displayFlex btn btn-default btn-dark" : "displayNone btn btn-default btn-dark"}>Sign Up</button>

            {/* the main sign up div */}
            <div id='signUpDiv' className={props.signUpDiv === true ? "displayFlex" : "displayNone"}>

                <div className='closeBtnDiv'>
                    <button id='signUpClose' onClick={closeBtn} className="btn btn-default">
                        <svg width="50" height="50" viewBox='0 0 30 30'>
                            <path d="M8.71146 8.71146C8.79855 8.62415 8.902 8.55489 9.0159 8.50762C9.12979 8.46036 9.2519 8.43604 9.37521 8.43604C9.49852 8.43604 9.62063 8.46036 9.73452 8.50762C9.84842 8.55489 9.95188 8.62415 10.039 8.71146L15.0002 13.6746L19.9615 8.71146C20.0486 8.6243 20.1521 8.55515 20.266 8.50798C20.3799 8.46081 20.5019 8.43653 20.6252 8.43653C20.7485 8.43653 20.8705 8.46081 20.9844 8.50798C21.0983 8.55515 21.2018 8.6243 21.289 8.71146C21.3761 8.79863 21.4453 8.9021 21.4924 9.01599C21.5396 9.12988 21.5639 9.25194 21.5639 9.37521C21.5639 9.49848 21.5396 9.62054 21.4924 9.73443C21.4453 9.84832 21.3761 9.9518 21.289 10.039L16.3258 15.0002L21.289 19.9615C21.3761 20.0486 21.4453 20.1521 21.4924 20.266C21.5396 20.3799 21.5639 20.5019 21.5639 20.6252C21.5639 20.7485 21.5396 20.8705 21.4924 20.9844C21.4453 21.0983 21.3761 21.2018 21.289 21.289C21.2018 21.3761 21.0983 21.4453 20.9844 21.4924C20.8705 21.5396 20.7485 21.5639 20.6252 21.5639C20.5019 21.5639 20.3799 21.5396 20.266 21.4924C20.1521 21.4453 20.0486 21.3761 19.9615 21.289L15.0002 16.3258L10.039 21.289C9.9518 21.3761 9.84832 21.4453 9.73443 21.4924C9.62054 21.5396 9.49848 21.5639 9.37521 21.5639C9.25194 21.5639 9.12988 21.5396 9.01599 21.4924C8.9021 21.4453 8.79863 21.3761 8.71146 21.289C8.6243 21.2018 8.55515 21.0983 8.50798 20.9844C8.46081 20.8705 8.43653 20.7485 8.43653 20.6252C8.43653 20.5019 8.46081 20.3799 8.50798 20.266C8.55515 20.1521 8.6243 20.0486 8.71146 19.9615L13.6746 15.0002L8.71146 10.039C8.62415 9.95188 8.55489 9.84842 8.50762 9.73452C8.46036 9.62063 8.43604 9.49852 8.43604 9.37521C8.43604 9.2519 8.46036 9.12979 8.50762 9.0159C8.55489 8.902 8.62415 8.79855 8.71146 8.71146Z" fill="#282A35" fillOpacity="0.6"></path>
                        </svg>
                    </button>
                </div>

                {/* the sign up form that will provide inputs for the user to put in information */}
                <form id="signUpForm" className='form-group' onSubmit={handleSubmit}>
                    <h1 className=''>Sign Up</h1>
                    <label className='signUpLabel'>email</label>
                    <div id='emailAlert' className="alert alert-danger alert-dismissible fade show">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        You must enter a valid email address
                    </div>
                    <input id="emailInput" className='form-control input' name="email" type="email" onChange={(e) => {
                        setSignUpObj({ email: e.target.value })
                    }}/>
                    <br />
                    <label className='signUpLabel'>username</label>
                    <div id='usernameAlert' className="alert alert-danger alert-dismissible fade show">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        Your username must contain at least 4 characters
                    </div>
                    <input id="usernameInput" className='form-control input' name='username' type="text" onChange={(e) => {
                        setSignUpObj({ username: e.target.value })
                    }} />
                    <br />
                    <label className='signUpLabel'>password</label>
                    <div id='passwordAlert' className="alert alert-danger alert-dismissible fade show">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        Your password must contain at least 8 characters
                    </div>
                    <div id='passwordTwoAlert' className="alert alert-danger alert-dismissible fade show">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        Your passwords do not match
                    </div>
                    <input id="passwordInput" className='form-control input' name='password' type='password' onChange={(e) => {
                        setSignUpObj({ password: e.target.value })
                    }} />
                    <label className='signUpLabel'> confirm password</label>
                    <input id="passwordTwoInput" className='form-control input' type='password' name='passwordTwo' onChange={(e) => {
                        setSignUpObj({ passwordTwo: e.target.value });
                    }} />
                    <div id='reqList'>
                        <li className='signUpLI'><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#000" fillOpacity="1.0"></circle></svg>You must enter a valid email address</li>
                        <li className='signUpLI'><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#000" fillOpacity="1.0"></circle></svg>Your username must contain at least 4 characters</li>
                        <li className='signUpLI'><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#000" fillOpacity="1.0"></circle></svg>Your password must contain at least 8 characters</li>
                    </div>
                    <button type="submit" id='signUpSubmit' className='formBtn btn btn-default btn-dark'>Sign Up</button>

                    {/* a p element that will display when the sign up process is successful */}
                    <p id='signUpSuccess'><span className='text-danger sucSpan'>{signUpObj.username}</span> has been signed up with <span className='text-danger sucSpan'>{signUpObj.email}</span> as the contact email. Remember your password as you will need it to post or reply to message boards.</p>

                </form>

            </div>
        </div>
    )
}

export default SignUp;