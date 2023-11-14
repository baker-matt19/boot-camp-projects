import React, { useState, useReducer } from 'react';


const LogIn = (props) => {

    const [logInObj, setLogInObj] = useReducer(
        (value, newDetails) => ({ ...value, ...newDetails}),
        {
        username: "",
        password: ""
    }); // useReducer hook to set the logIn object 

    const [userHoverDiv, setUserHoverDiv] = useState(false); // creating a hook to set the display of the userHoverDiv

    // creating the handleUserGet() function that will be called upon submition of the form
    const handleUserGet = (e) => {
        e.preventDefault();
        const headerOptions = {
            headers: {
                'Content-Type': 'application/json'
            },
        }

        // using a GET to send the username and password to the server where the server checks that the user exists and confirms the password matches the password from the user's object in the database
        fetch(`/api/login/${logInObj.username}/${logInObj.password}`, headerOptions)
            .then(res => res.json())
            .then(d => {
                console.log(d);
                // setting userObj with the returned object from the db
                if (d.login === "success") {
                    props.userObjHandler(d);
                    props.loggedInHandler(true) // change style based on this instead
                    props.linkDivHandler(true);
                }
                else if (d.login === "error") {
                    document.getElementById('logInAlert').style.display = "block";
                    document.getElementById('usernameLogInInput').style.border = '2px red solid';
                    document.getElementById('passwordLogInInput').style.border = '2px red solid';

                }
            });

    }


    // creating a login button that will open the modal for the log in form
    const logIn = (e) => {
        e.preventDefault();

        props.logInDivHandler(true);// setting logInDiv to true so it is displayed
        props.logInBtnHandler(false);// setting logInBtn to false so its display sets to none
        props.signUpBtnHandler(false); // setting signUpBtn display to false
        props.linkDivHandler(false); // setting linkDiv display to false
    }

    // creating a function for the close button in the log in div
    const closeBtn = (e) => {
        e.preventDefault();

        props.logInDivHandler(false);// setting logInDiv to false so its display is set to none
        props.logInBtnHandler(true);// setting logInBtn to true so its displayed 
        props.signUpBtnHandler(true); // setting signUpBtn display to true
        props.linkDivHandler(true); // setting linkDiv display to true
    }

    // creating a function that will be called when the user hovers the mouse over the logged in div
    const userInfoHover = (e) => {
        e.preventDefault();
        setUserHoverDiv(true);
        document.getElementById('loggedInDiv').style.backgroundColor = '#138496';
        document.getElementById('loggedInDiv').style.borderColor = '#117a8b';

    }

    // creating a function for when the user's mouse leaves the userInfo div
    const userInfoLeave = (e) => {
        e.preventDefault();
        setUserHoverDiv(false);
        document.getElementById('loggedInDiv').style.backgroundColor = '#17a2b8';
        document.getElementById('loggedInDiv').style.borderColor = '#17a28b';
    }


    return (
        <div id='logIn'>

            {/* log in button that will be located on the nav bar */}
            <button onClick={logIn} className={props.logInBtn === true ? 'displayFlex logInBtn btn btn-default btn-dark' : "displayNone logInBtn btn btn-default btn-dark"}>Log In</button>

            <div id='logInDiv' className={props.logInDiv === false ? "displayNone form-control" : props.loggedIn === true ? 'displayNone form-group' : "displayFlex form-group"}>

                <div className="closeBtnDiv">
                    <button id='logInClose' className='btn btn0-default' onClick={closeBtn}><svg width="50" height="50" viewBox='0 0 30 30'>
                        <path d="M8.71146 8.71146C8.79855 8.62415 8.902 8.55489 9.0159 8.50762C9.12979 8.46036 9.2519 8.43604 9.37521 8.43604C9.49852 8.43604 9.62063 8.46036 9.73452 8.50762C9.84842 8.55489 9.95188 8.62415 10.039 8.71146L15.0002 13.6746L19.9615 8.71146C20.0486 8.6243 20.1521 8.55515 20.266 8.50798C20.3799 8.46081 20.5019 8.43653 20.6252 8.43653C20.7485 8.43653 20.8705 8.46081 20.9844 8.50798C21.0983 8.55515 21.2018 8.6243 21.289 8.71146C21.3761 8.79863 21.4453 8.9021 21.4924 9.01599C21.5396 9.12988 21.5639 9.25194 21.5639 9.37521C21.5639 9.49848 21.5396 9.62054 21.4924 9.73443C21.4453 9.84832 21.3761 9.9518 21.289 10.039L16.3258 15.0002L21.289 19.9615C21.3761 20.0486 21.4453 20.1521 21.4924 20.266C21.5396 20.3799 21.5639 20.5019 21.5639 20.6252C21.5639 20.7485 21.5396 20.8705 21.4924 20.9844C21.4453 21.0983 21.3761 21.2018 21.289 21.289C21.2018 21.3761 21.0983 21.4453 20.9844 21.4924C20.8705 21.5396 20.7485 21.5639 20.6252 21.5639C20.5019 21.5639 20.3799 21.5396 20.266 21.4924C20.1521 21.4453 20.0486 21.3761 19.9615 21.289L15.0002 16.3258L10.039 21.289C9.9518 21.3761 9.84832 21.4453 9.73443 21.4924C9.62054 21.5396 9.49848 21.5639 9.37521 21.5639C9.25194 21.5639 9.12988 21.5396 9.01599 21.4924C8.9021 21.4453 8.79863 21.3761 8.71146 21.289C8.6243 21.2018 8.55515 21.0983 8.50798 20.9844C8.46081 20.8705 8.43653 20.7485 8.43653 20.6252C8.43653 20.5019 8.46081 20.3799 8.50798 20.266C8.55515 20.1521 8.6243 20.0486 8.71146 19.9615L13.6746 15.0002L8.71146 10.039C8.62415 9.95188 8.55489 9.84842 8.50762 9.73452C8.46036 9.62063 8.43604 9.49852 8.43604 9.37521C8.43604 9.2519 8.46036 9.12979 8.50762 9.0159C8.55489 8.902 8.62415 8.79855 8.71146 8.71146Z" fill="#282A35" fillOpacity="0.6"></path>
                    </svg></button>
                </div>

                {/* log in form that will use inputs for the user to put in their username and password */}
                <form id='logInForm' onSubmit={handleUserGet}>
                    <h1 className='text-dark'>Log In</h1>
                    <div id='logInAlert' className="alert alert-danger alert-dismissible fade show">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        username doesn't exist or password is incorrect
                    </div>
                    <label className='signUpLabel'>username</label>
                    <input id='usernameLogInInput' type="text" name='username' className='form-control' onChange={(e) => {
                        setLogInObj({ username: e.target.value });
                    }} />
                    <label className='signUpLabel'>password</label>
                    <input id='passwordLogInInput' type="password" name='password' className='form-control' onChange={(e) => {
                        setLogInObj({ password: e.target.value })
                    }} />
                    <button type='submit' className='formBtn btn btn-default btn-dark'>Log In</button>
                </form>


            </div>

                    {/* the div that will display when there is a successful log in and will display that the user is logged in */}
            <div id='loggedInDiv' className={props.loggedIn === true ? "displayFlex bg-dark" : "displayNone bg-dark"} onMouseEnter={userInfoHover} onMouseLeave={userInfoLeave}>
                <p id='loggedInText'><span className='userLoggedIn'>{props.userObj.username}</span><br /> logged in</p>

                    {/* a div that displays when the mouse hovers over the loggedInDiv */}
                <div id='userHoverDiv' className={userHoverDiv ? "displayBlock" : "displayNone"}>
                    <p>username: <span className='userLoggedIn'>{props.userObj.username}</span></p>
                    <p>email: <span className='userLoggedIn'>{props.userObj.email}</span></p>
                    <p>given id: <span className='userLoggedIn'>{props.userObj._id}</span></p>
                </div>


            </div>


        </div>
    )
}

export default LogIn;