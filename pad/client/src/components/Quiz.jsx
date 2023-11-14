import React, { useEffect, useState } from "react";
import './quiz.css'
import questionsJson from '../quiz-questions.json';
import devsJson from '../devs.json';


const Quiz = ({ devs, handleDevs, questions, handleQuestions, randomDev, handleRandomDev, randomQues, handleRandomQues, fetching, handleFetch, scoreBaker, handleScoreBaker, scoreStanley, handleScoreStanley, scoreMartinez, handleScoreMartinez, scoreDilka, handleScoreDilka, scoreDay, handleScoreDay, scoreMendenhall, handleScoreMendenhall, scoreParkins, handleScoreParkins, scoreDubois, handleScoreDubois, scoreBull, handleScoreBull, quiz, handleScoreBoard, wrongBull, handleWrongBull, wrongBaker, handleWrongBaker, wrongDay, handleWrongDay, wrongDilka, handleWrongDilka, wrongDubois, handleWrongDubois, wrongMendenhall, handleWrongMendenhall, wrongMartinez, handleWrongMartinez, wrongStanley,handleWrongStanley, wrongParkins, handleWrongParkins}) => {

    // hooks to set the random values for the devs and questions arrays that are loaded from the jsons
    const [randomJsonDev, setRandomJsonDev] = useState(Math.floor(Math.random() * devsJson.length));
    const [randomJsonQues, setRandomJsonQues] = useState(Math.floor(Math.random() * questionsJson.length));

    const [answerCorrect, setAnswerCorrect] = useState(false);
    const [answerIncorrect, setAnswerIncorrect] = useState(false);

    // a GET to retrieve the devs data from the mongoDB 
    const handleDevGet = () => {

        fetch('/api/devs', {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(d => {
                // console.log(d);
                handleDevs(d);
            });


    }

    // a GET to retreive the questions data from the MongoDB
    const handleQuestionGet = () => {

        fetch('/api/questions', {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(d => {
                // console.log(d);
                handleQuestions(d);
            })

    }

    // a useEffect hook to call both of the GET functions catching errors or finally setting the fetching of data to false
    useEffect(() => {
        handleFetch(true)
        try {
            handleDevGet();
            handleQuestionGet();
            // console.log(handleQuestionGet())
        }
        catch {
            console.log("Server failed to respond")

        }
        finally {
            handleFetch(false)
        }

    }, []);

    // a function to generate the next question from the database
    const handleGenerateQuestion = (e) => {
        // e.preventDefault();
        handleRandomDev(Math.floor(Math.random() * devs.length));
        handleRandomQues(Math.floor(Math.random() * questions.length));

    }

    // a fucntion to generate the next question from the jsons
    const handleGenerateJsonQuestion = (e) => {
        // e.preventDefault();

        setRandomJsonDev(Math.floor(Math.random() * devsJson.length));
        setRandomJsonQues(Math.floor(Math.random() * questionsJson.length));

    }



    // console.log(scoreBaker);
    // console.log(document.getElementById('dev').innerText);
    // console.log(questions === '');

    const quizDiv = () => {
        if (devs !== '' && questions !== '') {
            return (
                <>
                    <div id="devDiv">
                        <h2 id="dev">Dev {devs[randomDev] === undefined ? "" : devs[randomDev].name}</h2>
                    </div>

                    <div >
                        {/* 6/27/28----Added id to h3 and css style */}
                        <h3 id="questionTxt">Question</h3>
                        <p>{questions[randomQues] === undefined ? "" : questions[randomQues].questionText}</p>
                        {questions[randomQues] === undefined ? "" : questions[randomQues].answerOptions.sort((a, b) => Math.round(Math.random() * (1 - -1) + -1)).map(x => {
                            return <div id="questionTextDiv">
                                <p className="answers" key={x.answerText} onClick={(e) => {
                                    e.preventDefault();
                                    // console.log(console.log(optArr))
                                    if (x.isCorrect && devs[randomDev].name === "Baker") {
                                        handleScoreBaker(scoreBaker + 1);
                                        setAnswerCorrect(true);
                                    }
                                    else if (x.isCorrect && devs[randomDev].name === "Stanley") {
                                        handleScoreStanley(scoreStanley + 1);
                                        setAnswerCorrect(true);
                                    }
                                    else if (x.isCorrect && devs[randomDev].name === "Martinez") {
                                        handleScoreMartinez(scoreMartinez + 1);
                                        setAnswerCorrect(true);
                                    }
                                    else if (x.isCorrect && devs[randomDev].name === "Dilka") {
                                        handleScoreDilka(scoreDilka + 1);
                                        setAnswerCorrect(true);
                                    }
                                    else if (x.isCorrect && devs[randomDev].name === "Day") {
                                        handleScoreDay(scoreDay + 1);
                                        setAnswerCorrect(true);
                                    }
                                    else if (x.isCorrect && devs[randomDev].name === "Mendenhall") {
                                        handleScoreMendenhall(scoreMendenhall + 1);
                                        setAnswerCorrect(true);
                                    }
                                    else if (x.isCorrect && devs[randomDev].name === "Parkins") {
                                        handleScoreParkins(scoreParkins + 1);
                                        setAnswerCorrect(true);
                                    }
                                    else if (x.isCorrect && devs[randomDev].name === "Dubois") {
                                        handleScoreDubois(scoreDubois + 1);
                                        setAnswerCorrect(true);
                                    }
                                    else if (x.isCorrect && devs[randomDev].name === "Bull") {
                                        handleScoreBull(scoreBull + 1);
                                        setAnswerCorrect(true);
                                    }
                                    else if (x.isCorrect === false && devs[randomDev].name === "Bull"){
                                        handleWrongBull(wrongBull + 1);
                                        setAnswerIncorrect(true);

                                    }
                                    else if (x.isCorrect === false && devs[randomDev].name === "Baker"){
                                        handleWrongBaker(wrongBaker + 1);
                                        setAnswerIncorrect(true);
                                    }
                                    else if (x.isCorrect === false && devs[randomDev].name === "Day"){
                                        handleWrongDay(wrongDay + 1);
                                        setAnswerIncorrect(true);
                                    }
                                    else if (x.isCorrect === false && devs[randomDev].name === "Dilka"){
                                        handleWrongDilka(wrongDilka + 1);
                                        setAnswerIncorrect(true);
                                    }
                                    else if (x.isCorrect === false && devs[randomDev].name === "Dubois"){
                                        handleWrongDubois(wrongDubois + 1);
                                        setAnswerIncorrect(true);
                                    }
                                    else if (x.isCorrect === false && devs[randomDev].name === "Mendenhall"){
                                        handleWrongMendenhall(wrongMendenhall + 1);
                                        setAnswerIncorrect(true);
                                    }
                                    else if (x.isCorrect === false && devs[randomDev].name === "Martinez"){
                                        handleWrongMartinez(wrongMartinez + 1);
                                        setAnswerIncorrect(true);
                                    }
                                    else if (x.isCorrect === false && devs[randomDev].name === "Parkins"){
                                        handleWrongParkins(wrongParkins + 1);
                                        setAnswerIncorrect(true);
                                    }
                                    else if (x.isCorrect === false && devs[randomDev].name === "Stanley"){
                                        handleWrongStanley(wrongStanley + 1);
                                        setAnswerIncorrect(true);
                                    }
                                }}>{x.answerText}</p>
                            </div>

                        })}
                    </div>

                    {/* 6/26/23 classnames btn-primary and appBtn---------- */}
                    <button className="btn-primary appBtn" onClick={handleGenerateQuestion}>next</button>
                    <button className="btn-primary appBtn" onClick={() => {
                        handleScoreBoard(true);
                    }}>results</button>


                    <div id="answerCorrectModalDiv" className={answerCorrect === true ? 'displayFlex' : 'displayNone'}>
                        <div id="answerCorrectModal">

                            <div id="answerCorrectCloseDiv">
                                <button id='answeCorrectClose' onClick={() => {
                                    setAnswerCorrect(false);
                                    handleRandomDev(Math.floor(Math.random() * devs.length));
                                    handleRandomQues(Math.floor(Math.random() * questions.length));
                                }} className="btn btn-default">
                                    <svg width="50" height="50" viewBox='0 0 30 30'>
                                        <path d="M8.71146 8.71146C8.79855 8.62415 8.902 8.55489 9.0159 8.50762C9.12979 8.46036 9.2519 8.43604 9.37521 8.43604C9.49852 8.43604 9.62063 8.46036 9.73452 8.50762C9.84842 8.55489 9.95188 8.62415 10.039 8.71146L15.0002 13.6746L19.9615 8.71146C20.0486 8.6243 20.1521 8.55515 20.266 8.50798C20.3799 8.46081 20.5019 8.43653 20.6252 8.43653C20.7485 8.43653 20.8705 8.46081 20.9844 8.50798C21.0983 8.55515 21.2018 8.6243 21.289 8.71146C21.3761 8.79863 21.4453 8.9021 21.4924 9.01599C21.5396 9.12988 21.5639 9.25194 21.5639 9.37521C21.5639 9.49848 21.5396 9.62054 21.4924 9.73443C21.4453 9.84832 21.3761 9.9518 21.289 10.039L16.3258 15.0002L21.289 19.9615C21.3761 20.0486 21.4453 20.1521 21.4924 20.266C21.5396 20.3799 21.5639 20.5019 21.5639 20.6252C21.5639 20.7485 21.5396 20.8705 21.4924 20.9844C21.4453 21.0983 21.3761 21.2018 21.289 21.289C21.2018 21.3761 21.0983 21.4453 20.9844 21.4924C20.8705 21.5396 20.7485 21.5639 20.6252 21.5639C20.5019 21.5639 20.3799 21.5396 20.266 21.4924C20.1521 21.4453 20.0486 21.3761 19.9615 21.289L15.0002 16.3258L10.039 21.289C9.9518 21.3761 9.84832 21.4453 9.73443 21.4924C9.62054 21.5396 9.49848 21.5639 9.37521 21.5639C9.25194 21.5639 9.12988 21.5396 9.01599 21.4924C8.9021 21.4453 8.79863 21.3761 8.71146 21.289C8.6243 21.2018 8.55515 21.0983 8.50798 20.9844C8.46081 20.8705 8.43653 20.7485 8.43653 20.6252C8.43653 20.5019 8.46081 20.3799 8.50798 20.266C8.55515 20.1521 8.6243 20.0486 8.71146 19.9615L13.6746 15.0002L8.71146 10.039C8.62415 9.95188 8.55489 9.84842 8.50762 9.73452C8.46036 9.62063 8.43604 9.49852 8.43604 9.37521C8.43604 9.2519 8.46036 9.12979 8.50762 9.0159C8.55489 8.902 8.62415 8.79855 8.71146 8.71146Z" fill="#282A35" fillOpacity="0.6"></path>
                                    </svg>
                                </button>
                            </div>

                            <h4>That is correct!</h4>
                            <p>Dev {devs[randomDev] === undefined ? "" : devs[randomDev].name} gets the point</p>

                        </div>
                    </div>

                    <div id="answerIncorrectModalDiv" className={answerIncorrect === true ? 'displayFlex' : 'displayNone'}>

                        <div id="answerIncorrectModal">

                            <div id="answerIncorrectCloseDiv">
                                <button id='answerIncorrectClose' onClick={() => setAnswerIncorrect(false)} className="btn btn-default">
                                    <svg width="50" height="50" viewBox='0 0 30 30'>
                                        <path d="M8.71146 8.71146C8.79855 8.62415 8.902 8.55489 9.0159 8.50762C9.12979 8.46036 9.2519 8.43604 9.37521 8.43604C9.49852 8.43604 9.62063 8.46036 9.73452 8.50762C9.84842 8.55489 9.95188 8.62415 10.039 8.71146L15.0002 13.6746L19.9615 8.71146C20.0486 8.6243 20.1521 8.55515 20.266 8.50798C20.3799 8.46081 20.5019 8.43653 20.6252 8.43653C20.7485 8.43653 20.8705 8.46081 20.9844 8.50798C21.0983 8.55515 21.2018 8.6243 21.289 8.71146C21.3761 8.79863 21.4453 8.9021 21.4924 9.01599C21.5396 9.12988 21.5639 9.25194 21.5639 9.37521C21.5639 9.49848 21.5396 9.62054 21.4924 9.73443C21.4453 9.84832 21.3761 9.9518 21.289 10.039L16.3258 15.0002L21.289 19.9615C21.3761 20.0486 21.4453 20.1521 21.4924 20.266C21.5396 20.3799 21.5639 20.5019 21.5639 20.6252C21.5639 20.7485 21.5396 20.8705 21.4924 20.9844C21.4453 21.0983 21.3761 21.2018 21.289 21.289C21.2018 21.3761 21.0983 21.4453 20.9844 21.4924C20.8705 21.5396 20.7485 21.5639 20.6252 21.5639C20.5019 21.5639 20.3799 21.5396 20.266 21.4924C20.1521 21.4453 20.0486 21.3761 19.9615 21.289L15.0002 16.3258L10.039 21.289C9.9518 21.3761 9.84832 21.4453 9.73443 21.4924C9.62054 21.5396 9.49848 21.5639 9.37521 21.5639C9.25194 21.5639 9.12988 21.5396 9.01599 21.4924C8.9021 21.4453 8.79863 21.3761 8.71146 21.289C8.6243 21.2018 8.55515 21.0983 8.50798 20.9844C8.46081 20.8705 8.43653 20.7485 8.43653 20.6252C8.43653 20.5019 8.46081 20.3799 8.50798 20.266C8.55515 20.1521 8.6243 20.0486 8.71146 19.9615L13.6746 15.0002L8.71146 10.039C8.62415 9.95188 8.55489 9.84842 8.50762 9.73452C8.46036 9.62063 8.43604 9.49852 8.43604 9.37521C8.43604 9.2519 8.46036 9.12979 8.50762 9.0159C8.55489 8.902 8.62415 8.79855 8.71146 8.71146Z" fill="#282A35" fillOpacity="0.6"></path>
                                    </svg>
                                </button>
                            </div>

                            <h4>That is incorrect. Try again...</h4>
                        </div>

                    </div>
                </>
            )
        }
        else

            return (
                <>
                    <div id="devJsonDiv">
                        <h2>Dev {devsJson[randomJsonDev].name}</h2>
                    </div>
                    <div id="questionJsonDiv">
                        <h3 id="questionTxt">Question</h3>
                        <p>{questionsJson[randomJsonQues].questionText}</p>
                        {questionsJson[randomJsonQues].answerOptions.sort((a, b) => Math.round(Math.random() * (1 - -1) + -1)).map(x => {
                            return <p className="answers" key={x.answerText} onClick={(e) => {
                                e.preventDefault();
                                // console.log(x.answerText)


                                if (x.isCorrect && devsJson[randomJsonDev].name === "Baker") {
                                    handleScoreBaker(scoreBaker + 1);
                                    setAnswerCorrect(true);
                                }
                                else if (x.isCorrect && devsJson[randomJsonDev].name === "Stanley") {
                                    handleScoreStanley(scoreStanley + 1);
                                    setAnswerCorrect(true);
                                }
                                else if (x.isCorrect && devsJson[randomJsonDev].name === "Martinez") {
                                    handleScoreMartinez(scoreMartinez + 1);
                                    setAnswerCorrect(true);
                                }
                                else if (x.isCorrect && devsJson[randomJsonDev].name === "Dilka") {
                                    handleScoreDilka(scoreDilka + 1);
                                    setAnswerCorrect(true);
                                }
                                else if (x.isCorrect && devsJson[randomJsonDev].name === "Day") {
                                    handleScoreDay(scoreDay + 1);
                                    setAnswerCorrect(true);
                                }
                                else if (x.isCorrect && devsJson[randomJsonDev].name === "Mendenhall") {
                                    handleScoreMendenhall(scoreMendenhall + 1);
                                    setAnswerCorrect(true);
                                }
                                else if (x.isCorrect && devsJson[randomJsonDev].name === "Parkins") {
                                    handleScoreParkins(scoreParkins + 1);
                                    setAnswerCorrect(true);
                                }
                                else if (x.isCorrect && devsJson[randomJsonDev].name === "Dubois") {
                                    handleScoreDubois(scoreDubois + 1);
                                    setAnswerCorrect(true);
                                }
                                else if (x.isCorrect && devsJson[randomJsonDev].name === "Bull") {
                                    handleScoreBull(scoreBull + 1);
                                    setAnswerCorrect(true);
                                }
                                else if (x.isCorrect === false && devsJson[randomJsonDev].name === "Bull"){
                                    handleWrongBull(wrongBull + 1);
                                    setAnswerIncorrect(true);

                                }
                                else if (x.isCorrect === false && devsJson[randomJsonDev].name === "Baker"){
                                    handleWrongBaker(wrongBaker + 1);
                                    setAnswerIncorrect(true);
                                }
                                else if (x.isCorrect === false && devsJson[randomJsonDev].name === "Day"){
                                    handleWrongDay(wrongDay + 1);
                                    setAnswerIncorrect(true);
                                }
                                else if (x.isCorrect === false && devsJson[randomJsonDev].name === "Dilka"){
                                    handleWrongDilka(wrongDilka + 1);
                                    setAnswerIncorrect(true);
                                }
                                else if (x.isCorrect === false && devsJson[randomJsonDev].name === "Dubois"){
                                    handleWrongDubois(wrongDubois + 1);
                                    setAnswerIncorrect(true);
                                }
                                else if (x.isCorrect === false && devsJson[randomJsonDev].name === "Mendenhall"){
                                    handleWrongMendenhall(wrongMendenhall + 1);
                                    setAnswerIncorrect(true);
                                }
                                else if (x.isCorrect === false && devsJson[randomJsonDev].name === "Martinez"){
                                    handleWrongMartinez(wrongMartinez + 1);
                                    setAnswerIncorrect(true);
                                }
                                else if (x.isCorrect === false && devsJson[randomJsonDev].name === "Parkins"){
                                    handleWrongParkins(wrongParkins + 1);
                                    setAnswerIncorrect(true);
                                }
                                else if (x.isCorrect === false && devsJson[randomJsonDev].name === "Stanley"){
                                    handleWrongStanley(wrongStanley + 1);
                                    setAnswerIncorrect(true);
                                }
                            }}>{x.answerText}</p>
                        })}
                    </div>
                    {/* {console.log(randomJsonDev, randomJsonQues)} */}
                    <button className="btn-primary appBtn" onClick={handleGenerateJsonQuestion}>next</button>
                    <button className="btn-primary appBtn" onClick={() => {
                        handleScoreBoard(true);
                    }}>results</button>
                    <p id="jsonDisclaimer">The server wasn't able to load the data from the database so this is generated from a file with less questions...</p>


                    <div id="answerCorrectModalDiv" className={answerCorrect === true ? 'displayFlex' : 'displayNone'}>
                        <div id="answerCorrectModal">

                            <div id="answerCorrectCloseDiv">
                                <button id='answerCorrectClose' onClick={() => {
                                    setAnswerCorrect(false);
                                    handleGenerateJsonQuestion();
                                }} className="btn btn-default">
                                    <svg width="50" height="50" viewBox='0 0 30 30'>
                                        <path d="M8.71146 8.71146C8.79855 8.62415 8.902 8.55489 9.0159 8.50762C9.12979 8.46036 9.2519 8.43604 9.37521 8.43604C9.49852 8.43604 9.62063 8.46036 9.73452 8.50762C9.84842 8.55489 9.95188 8.62415 10.039 8.71146L15.0002 13.6746L19.9615 8.71146C20.0486 8.6243 20.1521 8.55515 20.266 8.50798C20.3799 8.46081 20.5019 8.43653 20.6252 8.43653C20.7485 8.43653 20.8705 8.46081 20.9844 8.50798C21.0983 8.55515 21.2018 8.6243 21.289 8.71146C21.3761 8.79863 21.4453 8.9021 21.4924 9.01599C21.5396 9.12988 21.5639 9.25194 21.5639 9.37521C21.5639 9.49848 21.5396 9.62054 21.4924 9.73443C21.4453 9.84832 21.3761 9.9518 21.289 10.039L16.3258 15.0002L21.289 19.9615C21.3761 20.0486 21.4453 20.1521 21.4924 20.266C21.5396 20.3799 21.5639 20.5019 21.5639 20.6252C21.5639 20.7485 21.5396 20.8705 21.4924 20.9844C21.4453 21.0983 21.3761 21.2018 21.289 21.289C21.2018 21.3761 21.0983 21.4453 20.9844 21.4924C20.8705 21.5396 20.7485 21.5639 20.6252 21.5639C20.5019 21.5639 20.3799 21.5396 20.266 21.4924C20.1521 21.4453 20.0486 21.3761 19.9615 21.289L15.0002 16.3258L10.039 21.289C9.9518 21.3761 9.84832 21.4453 9.73443 21.4924C9.62054 21.5396 9.49848 21.5639 9.37521 21.5639C9.25194 21.5639 9.12988 21.5396 9.01599 21.4924C8.9021 21.4453 8.79863 21.3761 8.71146 21.289C8.6243 21.2018 8.55515 21.0983 8.50798 20.9844C8.46081 20.8705 8.43653 20.7485 8.43653 20.6252C8.43653 20.5019 8.46081 20.3799 8.50798 20.266C8.55515 20.1521 8.6243 20.0486 8.71146 19.9615L13.6746 15.0002L8.71146 10.039C8.62415 9.95188 8.55489 9.84842 8.50762 9.73452C8.46036 9.62063 8.43604 9.49852 8.43604 9.37521C8.43604 9.2519 8.46036 9.12979 8.50762 9.0159C8.55489 8.902 8.62415 8.79855 8.71146 8.71146Z" fill="#282A35" fillOpacity="0.6"></path>
                                    </svg>
                                </button>
                            </div>

                            <h4>That is correct!</h4>
                            <p>Dev {devsJson[randomJsonDev].name} gets the point</p>

                        </div>
                    </div>

                    <div id="answerIncorrectModalDiv" className={answerIncorrect === true ? 'displayFlex' : 'displayNone'}>

                        <div id="answerIncorrectModal">

                            <div id="answerIncorrectCloseDiv">
                                <button id='answerIncorrectClose' onClick={() => setAnswerIncorrect(false)} className="btn btn-default">
                                    <svg width="50" height="50" viewBox='0 0 30 30'>
                                        <path d="M8.71146 8.71146C8.79855 8.62415 8.902 8.55489 9.0159 8.50762C9.12979 8.46036 9.2519 8.43604 9.37521 8.43604C9.49852 8.43604 9.62063 8.46036 9.73452 8.50762C9.84842 8.55489 9.95188 8.62415 10.039 8.71146L15.0002 13.6746L19.9615 8.71146C20.0486 8.6243 20.1521 8.55515 20.266 8.50798C20.3799 8.46081 20.5019 8.43653 20.6252 8.43653C20.7485 8.43653 20.8705 8.46081 20.9844 8.50798C21.0983 8.55515 21.2018 8.6243 21.289 8.71146C21.3761 8.79863 21.4453 8.9021 21.4924 9.01599C21.5396 9.12988 21.5639 9.25194 21.5639 9.37521C21.5639 9.49848 21.5396 9.62054 21.4924 9.73443C21.4453 9.84832 21.3761 9.9518 21.289 10.039L16.3258 15.0002L21.289 19.9615C21.3761 20.0486 21.4453 20.1521 21.4924 20.266C21.5396 20.3799 21.5639 20.5019 21.5639 20.6252C21.5639 20.7485 21.5396 20.8705 21.4924 20.9844C21.4453 21.0983 21.3761 21.2018 21.289 21.289C21.2018 21.3761 21.0983 21.4453 20.9844 21.4924C20.8705 21.5396 20.7485 21.5639 20.6252 21.5639C20.5019 21.5639 20.3799 21.5396 20.266 21.4924C20.1521 21.4453 20.0486 21.3761 19.9615 21.289L15.0002 16.3258L10.039 21.289C9.9518 21.3761 9.84832 21.4453 9.73443 21.4924C9.62054 21.5396 9.49848 21.5639 9.37521 21.5639C9.25194 21.5639 9.12988 21.5396 9.01599 21.4924C8.9021 21.4453 8.79863 21.3761 8.71146 21.289C8.6243 21.2018 8.55515 21.0983 8.50798 20.9844C8.46081 20.8705 8.43653 20.7485 8.43653 20.6252C8.43653 20.5019 8.46081 20.3799 8.50798 20.266C8.55515 20.1521 8.6243 20.0486 8.71146 19.9615L13.6746 15.0002L8.71146 10.039C8.62415 9.95188 8.55489 9.84842 8.50762 9.73452C8.46036 9.62063 8.43604 9.49852 8.43604 9.37521C8.43604 9.2519 8.46036 9.12979 8.50762 9.0159C8.55489 8.902 8.62415 8.79855 8.71146 8.71146Z" fill="#282A35" fillOpacity="0.6"></path>
                                    </svg>
                                </button>
                            </div>

                            <h4>That is incorrect. Try again...</h4>
                        </div>

                    </div>
                </>
            )
    }

    const loadingDiv = () => {
        return (<div>Loading...</div>)
    }

    return (
        <div id="quizBoard" className={quiz === true ? "displayFlex" : "displayNone"}>

                <h3>Quiz</h3>

                {fetching ? loadingDiv() : quizDiv()}
                
        </div>
    )
}



export default Quiz