import React, { useState, useReducer } from "react";
import { useGet } from "../hooks/useGet";
import Footer from "./Footer";

const MessageBoards = (props) => {

    // ========ADD=BOARD=HOOK========
    const [board, setBoard] = useReducer(
        (value, newDetails) => ({ ...value, ...newDetails }),
        {
            title: "",
            board: ""
        }
    ); // useReducer hook to set the board based on the input of the user
    board.username = props.userObj.username; // setting the username of our board so it can be posted in the database

    // ========SELECTED=BOARD=HOOK========
    const [selectedBoard, setSelectedBoard] = useReducer(
        (value, newDetails) => ({ ...value, ...newDetails }),
        {
            title: "",
            date: ""
        }
    ); // useReducer hook to set the selectedBoard by which message board the user clicks on

    // ========GOT=BOARD=HOOK========
    const [gotBoard, setGotBoard] = useState({}); // useState to set the message board selected by the user


    // ========UPDATE=BOARD=HOOK========
    const [update, setUpdate] = useReducer(
        (value, newDetails) => ({ ...value, ...newDetails }),
        {
            title: "",
            board: ""
        }
    ); // a useReducer for the update details when a user chooses to update a chosen board

    // ========ALL=BOARDS=GET========
    const [boards] = useGet('/api/boards'); // using my custom hook to get the message boards from the database

    // ========NEW=BOARD=POST========
    // creating my handlePostBoard() function that will be called once form is submited
    const handleSubmit = (e) => {
        e.preventDefault();


        const headerOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(board)
        }


        fetch("/api/boards", headerOptions)
            .then(res => res.json())
            .then(d => {
                console.log(d);
                props.boardAddedHandler(true);
            })


    }

    // ========GOT=BOARD=GET========
    // function to handle setting the title hook when the user clicks on a message board
    const handleBoardClick = (e) => {
        e.preventDefault();
        console.log(e);
        if (e.target.id === "boardResultDiv") {
            setSelectedBoard({ title: e.target.childNodes[0].innerText, date: e.target.childNodes[1].innerText });
            props.titleModalHandler(true);
        }
        else if (e.target.className === "boardsTitle boards") {
            setSelectedBoard({ title: e.target.innerText, date: e.target.nextSibling.innerText });
            props.titleModalHandler(true);
        }
        else if (e.target.className === "boardsDate boards") {
            setSelectedBoard({ title: e.target.previousSibling.innerText, date: e.target.innerText });
            props.titleModalHandler(true);
        }

    };

    // function that will GET the message board that the user selected from the database
    const handleBoardGet = (e) => {
        e.preventDefault();

        const headerOptions = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(`/api/boards/${selectedBoard.title}/${selectedBoard.date}`, headerOptions)
            .then(res => res.json())
            .then(d => {
                console.log(d);
                setGotBoard(d);

            })
        props.titleModalHandler(false);
        props.messageBoardHandler(true);

    }

    //    function to update message board using a PUT fetch
    const handleUpdate = (e) => {
        e.preventDefault();

        const { title, board } = update;

        const headerOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, board })
        }

        fetch(`/api/boards/${gotBoard._id}`, headerOptions)
            .then(res => res.json())
            .then(d => {
                console.log(d)
            });

        props.updateCompleteHandler(true);

    }

    //    function to delete message board using a DELETE fetch
    const handleDelete = (e) => {
        e.preventDefault();

        const headerOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(`/api/boards/${gotBoard._id}`, headerOptions)
            .then(res => res.json())
            .then(d => {
                console.log(d);
                props.deleteCompleteHandler(true);
            });


    }

    // function to set the display for the add boards button and div
    const addBoards = (e) => {
        e.preventDefault();
        props.addBoardsBtnHandler(false);
        props.addBoardsDivHandler(true);
    }


    return (
        <div id="messageBoardsDiv">

            <h1 id="mBHead" >Welcome to Our Message Boards</h1>
            <p id="mBText">A place to share ideas about the foods you love... anonymously...</p>

            <div id="messageBoardsContentDiv" >

                {/* ========ADD=BOARDS======== */}
                <div id="boardAddedModal" className={props.boardAdded ? 'displayFlex myModal' : 'displayNone'}>

                    <div id="boardAddedContent" className="displayFlex myModalDiv">

                        <div id="boardAddedMessage" >
                            <h3>Message Board succesfully added. Please be patient as it may take some time to appear in the Message Boards section.</h3>

                            <button id="boardAddedModalBtn" className='btn btn-default btn-dark' onClick={() => {
                                // once the user clicks got it it will refresh the page
                                window.location.reload()
                            }} >Got it!</button>
                        </div>

                    </div>
                </div>

                <button id="addBoardBtn" className={props.addBoardsBtn === true ? 'displayFlex btn btn-default btn-dark text-light' : 'displayNone btn btn-default btn-info'} onClick={addBoards}>Add New Message Board</button>

                <div id="addBoardDiv" className={props.addBoardsDiv === true ? "displayFlex" : "displayNone"}>

                    <div className='closeBtnDiv'>
                        <button id='signUpClose' onClick={() => {
                            props.addBoardsDivHandler(false);
                            props.addBoardsBtnHandler(true);
                        }} className="btn btn-default">
                            <svg width="50" height="50" viewBox='0 0 30 30'>
                                <path d="M8.71146 8.71146C8.79855 8.62415 8.902 8.55489 9.0159 8.50762C9.12979 8.46036 9.2519 8.43604 9.37521 8.43604C9.49852 8.43604 9.62063 8.46036 9.73452 8.50762C9.84842 8.55489 9.95188 8.62415 10.039 8.71146L15.0002 13.6746L19.9615 8.71146C20.0486 8.6243 20.1521 8.55515 20.266 8.50798C20.3799 8.46081 20.5019 8.43653 20.6252 8.43653C20.7485 8.43653 20.8705 8.46081 20.9844 8.50798C21.0983 8.55515 21.2018 8.6243 21.289 8.71146C21.3761 8.79863 21.4453 8.9021 21.4924 9.01599C21.5396 9.12988 21.5639 9.25194 21.5639 9.37521C21.5639 9.49848 21.5396 9.62054 21.4924 9.73443C21.4453 9.84832 21.3761 9.9518 21.289 10.039L16.3258 15.0002L21.289 19.9615C21.3761 20.0486 21.4453 20.1521 21.4924 20.266C21.5396 20.3799 21.5639 20.5019 21.5639 20.6252C21.5639 20.7485 21.5396 20.8705 21.4924 20.9844C21.4453 21.0983 21.3761 21.2018 21.289 21.289C21.2018 21.3761 21.0983 21.4453 20.9844 21.4924C20.8705 21.5396 20.7485 21.5639 20.6252 21.5639C20.5019 21.5639 20.3799 21.5396 20.266 21.4924C20.1521 21.4453 20.0486 21.3761 19.9615 21.289L15.0002 16.3258L10.039 21.289C9.9518 21.3761 9.84832 21.4453 9.73443 21.4924C9.62054 21.5396 9.49848 21.5639 9.37521 21.5639C9.25194 21.5639 9.12988 21.5396 9.01599 21.4924C8.9021 21.4453 8.79863 21.3761 8.71146 21.289C8.6243 21.2018 8.55515 21.0983 8.50798 20.9844C8.46081 20.8705 8.43653 20.7485 8.43653 20.6252C8.43653 20.5019 8.46081 20.3799 8.50798 20.266C8.55515 20.1521 8.6243 20.0486 8.71146 19.9615L13.6746 15.0002L8.71146 10.039C8.62415 9.95188 8.55489 9.84842 8.50762 9.73452C8.46036 9.62063 8.43604 9.49852 8.43604 9.37521C8.43604 9.2519 8.46036 9.12979 8.50762 9.0159C8.55489 8.902 8.62415 8.79855 8.71146 8.71146Z" fill="#282A35" fillOpacity="0.6"></path>
                            </svg>
                        </button>
                    </div>

                    <form id='addBoardForm' className='form-group' onSubmit={handleSubmit}>

                        <label className='label'>Title of Message Board</label>
                        <input id='mBTitleInput' className='addMessageInput' value={props.title} onChange={(e) => setBoard({ title: e.target.value })} />

                        <label className='label'>Message Board</label>
                        <br />
                        <textarea id="mBTextArea" rows="25" onChange={(e) => setBoard({ board: e.target.value })} className='addMessageInput'></textarea>

                        <button type='submit' className='btn btn-default btn-dark' id='addBoardSubmitBtn'>Add Message Board</button>
                    </form>
                </div>

                {/* ========MESSAGE=BOARDS======== */}
                <div id='boardsDiv'>

                    <div id="titleModal" className={props.titleModal ? "displayFlex myModal" : "displayNone"}>
                        <div id="modalContent" className="myModalDiv">
                            <h3>Is this the message board you are looking for?</h3>
                            <p id='selectedTitle'>{selectedBoard.title}</p>
                            <div id="titleModalBtnDiv" className="modalBtnDiv">

                                <button className='modalBtn btn btn-default btn-dark' onClick={handleBoardGet}>Yes</button>
                                <button className='modalBtn btn btn-default btn-dark' onClick={(e) => {
                                    e.preventDefault();
                                    props.titleModalHandler(false);
                                }}>No</button>
                            </div>

                        </div>
                    </div>

                    <h2>Message Boards</h2>
                    <div id='renderBoardsDiv'>
                        <div id='boardLabelDiv'>
                            <p className='mBLabel'>Title</p>
                            <p className='mBLabel'>Date Created</p>
                        </div>
                        {boards !== null ? boards.map((x, i) => {
                            return <div id='boardResultDiv' key={x._id} onClick={handleBoardClick}>
                                <p className='boardsTitle boards' key={x.title}>{x.title}</p>
                                <p className='boardsDate boards' key={x.date}>{x.date.toString()}</p>
                            </div>
                        }) : "We are currently experiencing difficulties with our server. Sorry for the inconvenience."}
                    </div>

                    <div id="messageBoardModal" className={props.messageBoard === true ? "displayFlex myModal" : "displayNone"}>


                        <div id='messageBoardDiv' className="myModalDiv">

                            <div className='closeBtnDiv'>
                                <button id='signUpClose' onClick={() => {
                                    props.messageBoardHandler(false);
                                }} className="btn btn-default">
                                    <svg width="50" height="50" viewBox='0 0 30 30'>
                                        <path d="M8.71146 8.71146C8.79855 8.62415 8.902 8.55489 9.0159 8.50762C9.12979 8.46036 9.2519 8.43604 9.37521 8.43604C9.49852 8.43604 9.62063 8.46036 9.73452 8.50762C9.84842 8.55489 9.95188 8.62415 10.039 8.71146L15.0002 13.6746L19.9615 8.71146C20.0486 8.6243 20.1521 8.55515 20.266 8.50798C20.3799 8.46081 20.5019 8.43653 20.6252 8.43653C20.7485 8.43653 20.8705 8.46081 20.9844 8.50798C21.0983 8.55515 21.2018 8.6243 21.289 8.71146C21.3761 8.79863 21.4453 8.9021 21.4924 9.01599C21.5396 9.12988 21.5639 9.25194 21.5639 9.37521C21.5639 9.49848 21.5396 9.62054 21.4924 9.73443C21.4453 9.84832 21.3761 9.9518 21.289 10.039L16.3258 15.0002L21.289 19.9615C21.3761 20.0486 21.4453 20.1521 21.4924 20.266C21.5396 20.3799 21.5639 20.5019 21.5639 20.6252C21.5639 20.7485 21.5396 20.8705 21.4924 20.9844C21.4453 21.0983 21.3761 21.2018 21.289 21.289C21.2018 21.3761 21.0983 21.4453 20.9844 21.4924C20.8705 21.5396 20.7485 21.5639 20.6252 21.5639C20.5019 21.5639 20.3799 21.5396 20.266 21.4924C20.1521 21.4453 20.0486 21.3761 19.9615 21.289L15.0002 16.3258L10.039 21.289C9.9518 21.3761 9.84832 21.4453 9.73443 21.4924C9.62054 21.5396 9.49848 21.5639 9.37521 21.5639C9.25194 21.5639 9.12988 21.5396 9.01599 21.4924C8.9021 21.4453 8.79863 21.3761 8.71146 21.289C8.6243 21.2018 8.55515 21.0983 8.50798 20.9844C8.46081 20.8705 8.43653 20.7485 8.43653 20.6252C8.43653 20.5019 8.46081 20.3799 8.50798 20.266C8.55515 20.1521 8.6243 20.0486 8.71146 19.9615L13.6746 15.0002L8.71146 10.039C8.62415 9.95188 8.55489 9.84842 8.50762 9.73452C8.46036 9.62063 8.43604 9.49852 8.43604 9.37521C8.43604 9.2519 8.46036 9.12979 8.50762 9.0159C8.55489 8.902 8.62415 8.79855 8.71146 8.71146Z" fill="#282A35" fillOpacity="0.6"></path>
                                    </svg>
                                </button>
                            </div>

                            <div id="messageBoardContentDiv">

                                <label className='mBLabel'>Title:</label><hr className="contentBreak" />
                                <div id='messageBoardTitleDiv' className='mBDiv'>
                                    <p>{gotBoard.title}</p>
                                </div><hr className="contentBreak" />

                                <label className='mBLabel'>Date Created:</label><hr className="contentBreak" />
                                <div id='messageBoardDateDiv' className='mBDiv'>
                                    {gotBoard.date}
                                </div><hr className="contentBreak" />

                                <label className={gotBoard.upDated === undefined ? 'displayNone mBLabel' : "displayBlock mBLabel"}>Last Update:</label><hr className={gotBoard.upDated === undefined ? "displayNone" : "displayBlock contentBreak"} />
                                <div id='messageBoardUpDatedDiv' className={gotBoard.upDated === undefined ? 'displayNone mBDiv' : "displayBlock mBDiv"}>
                                    {gotBoard.upDated}
                                </div><hr className={gotBoard.upDated === undefined ? "displayNone" : "displayBlock contentBreak"} />

                                <label className='mBLabel'>Message Board:</label><hr className="contentBreak" />
                                <div id='messageBoardMBDiv' className='mBDiv'>
                                    {gotBoard.board}
                                </div><hr className="contentBreak" />

                            </div>


                            <div id="mBBtnDiv" className="modalBtnDiv">
                                <button className='btn btn-default btn-dark' onClick={() => {
                                    props.updateBoardHandler(true);
                                }}>Update this Board?</button>
                                <button className='btn btn-default btn-dark' onClick={() => {
                                    props.deleteBoardHandler(true);
                                }}>Delete this Board?</button>
                            </div>
                        </div>

                    </div>


                    {/* ========UPDATE=BOARD======== */}
                    <div id="updateBoardModal" className={props.updateBoard === true ? "displayFlex myModal" : "displayNone"}>

                        <div id="updateBoardDiv" className="myModalDiv">

                            <div className='closeBtnDiv'>
                                <button id='signUpClose' onClick={() => {
                                    props.updateBoardHandler(false);
                                }} className="btn btn-default">
                                    <svg width="50" height="50" viewBox='0 0 30 30'>
                                        <path d="M8.71146 8.71146C8.79855 8.62415 8.902 8.55489 9.0159 8.50762C9.12979 8.46036 9.2519 8.43604 9.37521 8.43604C9.49852 8.43604 9.62063 8.46036 9.73452 8.50762C9.84842 8.55489 9.95188 8.62415 10.039 8.71146L15.0002 13.6746L19.9615 8.71146C20.0486 8.6243 20.1521 8.55515 20.266 8.50798C20.3799 8.46081 20.5019 8.43653 20.6252 8.43653C20.7485 8.43653 20.8705 8.46081 20.9844 8.50798C21.0983 8.55515 21.2018 8.6243 21.289 8.71146C21.3761 8.79863 21.4453 8.9021 21.4924 9.01599C21.5396 9.12988 21.5639 9.25194 21.5639 9.37521C21.5639 9.49848 21.5396 9.62054 21.4924 9.73443C21.4453 9.84832 21.3761 9.9518 21.289 10.039L16.3258 15.0002L21.289 19.9615C21.3761 20.0486 21.4453 20.1521 21.4924 20.266C21.5396 20.3799 21.5639 20.5019 21.5639 20.6252C21.5639 20.7485 21.5396 20.8705 21.4924 20.9844C21.4453 21.0983 21.3761 21.2018 21.289 21.289C21.2018 21.3761 21.0983 21.4453 20.9844 21.4924C20.8705 21.5396 20.7485 21.5639 20.6252 21.5639C20.5019 21.5639 20.3799 21.5396 20.266 21.4924C20.1521 21.4453 20.0486 21.3761 19.9615 21.289L15.0002 16.3258L10.039 21.289C9.9518 21.3761 9.84832 21.4453 9.73443 21.4924C9.62054 21.5396 9.49848 21.5639 9.37521 21.5639C9.25194 21.5639 9.12988 21.5396 9.01599 21.4924C8.9021 21.4453 8.79863 21.3761 8.71146 21.289C8.6243 21.2018 8.55515 21.0983 8.50798 20.9844C8.46081 20.8705 8.43653 20.7485 8.43653 20.6252C8.43653 20.5019 8.46081 20.3799 8.50798 20.266C8.55515 20.1521 8.6243 20.0486 8.71146 19.9615L13.6746 15.0002L8.71146 10.039C8.62415 9.95188 8.55489 9.84842 8.50762 9.73452C8.46036 9.62063 8.43604 9.49852 8.43604 9.37521C8.43604 9.2519 8.46036 9.12979 8.50762 9.0159C8.55489 8.902 8.62415 8.79855 8.71146 8.71146Z" fill="#282A35" fillOpacity="0.6"></path>
                                    </svg>
                                </button>
                            </div>

                            <label className='mBLabel'>Update Title</label>
                            <input type="text" id='updateTitleInput' className='userInput' onChange={(e) => {
                                setUpdate({ title: e.target.value })
                            }} />
                            <label className='mBLabel'>Update Message Board</label>
                            <textarea name="update" id="updateBoardTA" rows='18' className='userInput' onChange={(e) => {
                                setUpdate({ board: e.target.value })
                            }}></textarea>

                            <button id='updateMBBtn' className='btn btn-default btn-dark' onClick={handleUpdate} >Update Message Board</button>
                        </div>

                        <div id="updateCompleteModal" className={props.updateComplete === true ? "displayFlex myModal" : "displayNone"}>
                            <div id="updateCompleteContent">
                                <div id="updateCompleteMessage" className="myModalDiv">
                                    <h3>Message Board succesfully updated. Please be patient as it may take some time to update in the Message Boards section. Refresh the page to check for the update...</h3>
                                    <button id="updatedModalBtn" className='btn btn-default btn-dark' onClick={() => {
                                        props.updateBoardHandler(false);
                                        props.messageBoardHandler(false);
                                        window.location.reload();
                                    }} >Got it!</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* ========DELETE=BOARD======== */}
                    <div id="deleteBoardModal" className={props.deleteBoard === true ? "displayFlex myModal" : "displayNone"}>

                        <div id="deleteBoardDiv" className="myModalDiv">

                            <h3 id='deleteHead'>Are you sure you want to delete this Message Board?</h3>

                            <div id="deleteBoard">
                                <p className='mBLabel'>title: <span className='infoSpan'>{selectedBoard.title}</span></p>
                                <p className='mBLabel'>date created: <span className='infoSpan'>{selectedBoard.date.toString()}</span></p>
                            </div>



                            <div id="deleteBtnDiv" className="modalBtnDiv">

                                <button className='tMBtn btn btn-default btn-dark' onClick={handleDelete}>Yes</button>
                                <button className='tMBtn btn btn-default btn-dark' onClick={() => {
                                    props.deleteBoardHandler(false);
                                }}>No</button>
                            </div>

                            <div id="deleteCompleteModal" className={props.deleteComplete ? "displayFlex myModal" : "displayNone"}>
                                <div id="deleteCompleteContent" className="myModalDiv">
                                    <div id="deleteCompleteMessage">
                                        <h3>Message Board succesfully deleted. Please be patient as it may take some time to be deleted in the Message Boards section. Refresh the page to check for the update...</h3>
                                        <button id="deleteCompleteBtn" className='btn btn-default btn-dark' onClick={() => {
                                            window.location.reload();
                                        }} >Got it!</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default MessageBoards;