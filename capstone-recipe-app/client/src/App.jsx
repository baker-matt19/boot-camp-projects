import React, { useState } from "react";
import "./App.css";
import "./mediaQs.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";
import MessageBoards from "./components/MessageBoards";
import Contact from "./components/Contact";

const App = () => {

    // =======HOOKS========

    // ========NAV=HOOKS=========
    const [linkDiv, setLinkDiv] = useState(true); // setting the display for the link div in the nav bar

    //  ========SIGN=UP=HOOKS========
    
    const [signUpDiv, setSignUpDiv] = useState(false); // setting the display of the signUpDiv
    const [signUpBtn, setSignUpBtn] = useState(true); // setting the display of the signUpBtn

    //  ========LOG=IN=HOOKS=========
    const [userObj, setUserObj] = useState('');//  saving the userObj that is set and returned in my LogIn component
    const [loggedIn, setLoggedIn] = useState(false);//  setting whether user succesfully logged in handled in LogIn component
    const [logInDiv, setLogInDiv] = useState(false);//  setting the display property of the logInDiv
    const [logInBtn, setLogInBtn] = useState(true);//  setting the display property of the logInBtn
    

    // ========MESSAGE=BOARDS=HOOKS=======
    const [addBoardsBtn, setAddBoardsBtn] = useState(true); // setting the display for the addBoardsBtn
    const [addBoardsDiv, setAddBoardsDiv] = useState(false); // setting the display for the addBoardsDiv
    const [boardAdded, setBoardAdded] = useState(false); // setting the display for the boardAddedModal 
    const [titleModal, setTitleModal] = useState(false); // to set the display for the title modal
    const [messageBoard, setMessageBoard] = useState(false); // to set the display for the div of the message board that was selected
    const [updateBoard, setUpdateBoard] = useState(false); // to set the display of the update modal
    const [updateComplete, setUpdateComplete] = useState(false); // to set the display of the update complete modal
    const [deleteBoard, setDeleteBoard] = useState(false); // to set the display of the delete board modal
    const [deleteComplete, setDeleteComplete] = useState(false); // to set the display of the delete complete modal

    // ========CONTACT=HOOKS========
    const [addIssue, setAddIssue] = useState(false);
    

    // ========HANDLER=FUNCTIONS========
    // functions that i will pass down to my other components as props to set the hook values inside the child component
    //    ========NAV=HANDLERS=========
    const linkDivHandler = (bool) => {
        setLinkDiv(bool);
    }
    
    // ========SIGN=UP=HANDLERS=======
    const signUpDivHandler = (boo) => {
        setSignUpDiv(boo)
    }
    const signUpBtnHandler = (boo) => {
        setSignUpBtn(boo)
    }

    //  ========LOG=IN=HANDLERS=======
    const userObjHandler = (obj) => {
        setUserObj(obj)
    }
    const loggedInHandler = (boo) => {
        setLoggedIn(boo)
    }
    const logInDivHandler = (boo) => {
        setLogInDiv(boo)
    }
    const logInBtnHandler = (boo) => {
        setLogInBtn(boo)
    }


    // ========ADD=BOARDS=HANDLERS=======
    const addBoardsBtnHandler = (boo) => {
        setAddBoardsBtn(boo)
    }
    const addBoardsDivHandler = (boo) => {
        setAddBoardsDiv(boo)
    }
    const boardAddedHandler = (bool) => {
        setBoardAdded(bool);
    }
    const titleModalHandler = (bool) => {
        setTitleModal(bool);
    }
    const messageBoardHandler = (bool) => {
        setMessageBoard(bool);
    }
    const updateBoardHandler = (bool) => {
        setUpdateBoard(bool);
    }
    const updateCompleteHandler = (bool) => {
        setUpdateComplete(bool);
    }
    const deleteBoardHandler = (bool) => {
        setDeleteBoard(bool);
    }
    const deleteCompleteHandler = (bool) => {
        setDeleteComplete(bool);
    }

    // ========CONTACT=HANDLERS========
    const addIssueHandler = (bool) => {
        setAddIssue(bool);
    }
    

    return (
        <div id="mainAppDiv">
            <Nav
                userObj={userObj} userObjHandler={userObjHandler}
                loggedIn={loggedIn} loggedInHandler={loggedInHandler}
                logInDiv={logInDiv} logInDivHandler={logInDivHandler}
                logInBtn={logInBtn} logInBtnHandler={logInBtnHandler}
                signUpDiv={signUpDiv} signUpDivHandler={signUpDivHandler}
                signUpBtn={signUpBtn} signUpBtnHandler={signUpBtnHandler}
                linkDiv={linkDiv} linkDivHandler={linkDivHandler}
            />
            <Switch>

                <Route path="/recipes"><Recipes /></Route>

                <Route path="/add-recipe"><AddRecipe 
                userObj={userObj}
                /></Route>

                <Route path="/message-boards"><MessageBoards
                    userObj={userObj}
                    addBoardsBtn={addBoardsBtn} addBoardsBtnHandler={addBoardsBtnHandler}
                    addBoardsDiv={addBoardsDiv} addBoardsDivHandler={addBoardsDivHandler}
                    boardAdded={boardAdded} boardAddedHandler={boardAddedHandler}
                    titleModal={titleModal} titleModalHandler={titleModalHandler}
                    messageBoard={messageBoard} messageBoardHandler={messageBoardHandler}
                    updateBoard={updateBoard} updateBoardHandler={updateBoardHandler}
                    updateComplete={updateComplete} updateCompleteHandler={updateCompleteHandler}
                    deleteBoard={deleteBoard} deleteBoardHandler={deleteBoardHandler}
                    deleteComplete={deleteComplete} deleteCompleteHandler={deleteCompleteHandler}
                /></Route>

                <Route path="/contact"><Contact
                    userObj={userObj}
                    addIssue={addIssue} addIssueHandler={addIssueHandler}
                /></Route>

                <Route path="/"><Home /></Route>
            </Switch>



        </div>
    )
};

export default App;