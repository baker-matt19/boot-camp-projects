import React, { useState } from "react";

const AddQuestion = (props) => {

    // hooks to set the added question
    const [questionText, setQuestionText] = useState("");
    const [answerOptions, setAnswerOptions] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState({
        answerText: "", isCorrect: true
    });
    const [incorrectAnswerOne, setIncorrectAnswerOne] = useState({
        answerText: "", isCorrect: false
    });
    const [incorrectAnswerTwo, setIncorrectAnswerTwo] = useState({
        answerText: "", isCorrect: false
    });
    const [incorrectAnswerThree, setIncorrectAnswerThree] = useState({
        answerText: "", isCorrect: false
    });


    // function that will compile the question and display a prompt ensuring that the question is right and that they wish to submit it
    const submitQuestion = (e) => {
        e.preventDefault();


        props.handleQuestion({
            "questionText": questionText,
            "answerOptions": answerOptions
        });

        props.handleQuestionForm(false);
        props.handleQuestionPrompt(true);
    }


    const handleSubmit = (e) => {
        // e.preventDefault();



        const headerOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(props.question)
        }

        fetch('/api/question', headerOptions)
            .then(res => res.json())
            .then(d => {
                console.log(d);
                props.handleAddQuestion(false);
            })
    }


    const checkForAnswers = (answersObj) => {
        // console.log("in checkforanswers", answersObj)
        for (let [k, v] of Object.entries(answersObj)) {
            // console.log("k", k, "v", v)
            if (v.answerText === "") {
                return true;
            }
        }
        return false;
    }
    // console.log(props.question.answerOptions[0].answerText);
    // console.log(answerOptions);

    return (
        <div id="addQuestionDiv" className={props.addQuestion === true ? 'displayFlex' : 'displayNone'}>

            <form id="addQuestion" className={props.questionForm ? 'displayFlex' : 'displayNone'} onSubmit={submitQuestion}>

                <div id="addQuestionCloseDiv">
                    <button id='addQuestionClose' onClick={() => {
                        props.handleAddQuestion(false);
                    }} className="btn btn-default">
                        <svg width="50" height="50" viewBox='0 0 30 30'>
                            <path d="M8.71146 8.71146C8.79855 8.62415 8.902 8.55489 9.0159 8.50762C9.12979 8.46036 9.2519 8.43604 9.37521 8.43604C9.49852 8.43604 9.62063 8.46036 9.73452 8.50762C9.84842 8.55489 9.95188 8.62415 10.039 8.71146L15.0002 13.6746L19.9615 8.71146C20.0486 8.6243 20.1521 8.55515 20.266 8.50798C20.3799 8.46081 20.5019 8.43653 20.6252 8.43653C20.7485 8.43653 20.8705 8.46081 20.9844 8.50798C21.0983 8.55515 21.2018 8.6243 21.289 8.71146C21.3761 8.79863 21.4453 8.9021 21.4924 9.01599C21.5396 9.12988 21.5639 9.25194 21.5639 9.37521C21.5639 9.49848 21.5396 9.62054 21.4924 9.73443C21.4453 9.84832 21.3761 9.9518 21.289 10.039L16.3258 15.0002L21.289 19.9615C21.3761 20.0486 21.4453 20.1521 21.4924 20.266C21.5396 20.3799 21.5639 20.5019 21.5639 20.6252C21.5639 20.7485 21.5396 20.8705 21.4924 20.9844C21.4453 21.0983 21.3761 21.2018 21.289 21.289C21.2018 21.3761 21.0983 21.4453 20.9844 21.4924C20.8705 21.5396 20.7485 21.5639 20.6252 21.5639C20.5019 21.5639 20.3799 21.5396 20.266 21.4924C20.1521 21.4453 20.0486 21.3761 19.9615 21.289L15.0002 16.3258L10.039 21.289C9.9518 21.3761 9.84832 21.4453 9.73443 21.4924C9.62054 21.5396 9.49848 21.5639 9.37521 21.5639C9.25194 21.5639 9.12988 21.5396 9.01599 21.4924C8.9021 21.4453 8.79863 21.3761 8.71146 21.289C8.6243 21.2018 8.55515 21.0983 8.50798 20.9844C8.46081 20.8705 8.43653 20.7485 8.43653 20.6252C8.43653 20.5019 8.46081 20.3799 8.50798 20.266C8.55515 20.1521 8.6243 20.0486 8.71146 19.9615L13.6746 15.0002L8.71146 10.039C8.62415 9.95188 8.55489 9.84842 8.50762 9.73452C8.46036 9.62063 8.43604 9.49852 8.43604 9.37521C8.43604 9.2519 8.46036 9.12979 8.50762 9.0159C8.55489 8.902 8.62415 8.79855 8.71146 8.71146Z" fill="#282A35" fillOpacity="0.6"></path>
                        </svg>
                    </button>
                </div>

                <h3>Add Your Own Question</h3>
                <label >Question</label>
                <input type="text" className="form-control aQInput" onChange={(e) => setQuestionText(e.target.value)} />

                <div id="answersDiv">
                    <label >Correct Answer</label>
                    <input type="text" className="form-control aQInput" onChange={(e) => setCorrectAnswer({
                        answerText: e.target.value, isCorrect: true
                    })} />
                    <label >Incorrect Answer</label>
                    <input type="text" className="form-control aQInput" onChange={(e) => setIncorrectAnswerOne({
                        answerText: e.target.value, isCorrect: false
                    })} />
                    <label >Incorrect Answer</label>
                    <input type="text" className="form-control aQInput" onChange={(e) => setIncorrectAnswerTwo({
                        answerText: e.target.value,
                        isCorrect: false
                    })} />
                    <label >Incorrect Answer</label>
                    <input type="text" className="form-control aQInput" onChange={(e) => {
                        setIncorrectAnswerThree({
                            answerText: e.target.value,
                            isCorrect: false
                        })

                    }} />
                    <button className="btn-primary appBtn" onClick={() => setAnswerOptions([correctAnswer, incorrectAnswerOne, incorrectAnswerTwo, incorrectAnswerThree])} type="submit">Submit Question</button>
                </div>

            </form>

            <div id="questionPrompt" className={props.questionPrompt ? 'displayFlex' : 'displayNone'}>

                <div id="questionPromptCloseDiv">
                    <button id='questionPromptClose' onClick={() => {
                        props.handleQuestionPrompt(false);
                        props.handleQuestionForm(true);
                    }} className="btn btn-default">
                        <svg width="50" height="50" viewBox='0 0 30 30'>
                            <path d="M8.71146 8.71146C8.79855 8.62415 8.902 8.55489 9.0159 8.50762C9.12979 8.46036 9.2519 8.43604 9.37521 8.43604C9.49852 8.43604 9.62063 8.46036 9.73452 8.50762C9.84842 8.55489 9.95188 8.62415 10.039 8.71146L15.0002 13.6746L19.9615 8.71146C20.0486 8.6243 20.1521 8.55515 20.266 8.50798C20.3799 8.46081 20.5019 8.43653 20.6252 8.43653C20.7485 8.43653 20.8705 8.46081 20.9844 8.50798C21.0983 8.55515 21.2018 8.6243 21.289 8.71146C21.3761 8.79863 21.4453 8.9021 21.4924 9.01599C21.5396 9.12988 21.5639 9.25194 21.5639 9.37521C21.5639 9.49848 21.5396 9.62054 21.4924 9.73443C21.4453 9.84832 21.3761 9.9518 21.289 10.039L16.3258 15.0002L21.289 19.9615C21.3761 20.0486 21.4453 20.1521 21.4924 20.266C21.5396 20.3799 21.5639 20.5019 21.5639 20.6252C21.5639 20.7485 21.5396 20.8705 21.4924 20.9844C21.4453 21.0983 21.3761 21.2018 21.289 21.289C21.2018 21.3761 21.0983 21.4453 20.9844 21.4924C20.8705 21.5396 20.7485 21.5639 20.6252 21.5639C20.5019 21.5639 20.3799 21.5396 20.266 21.4924C20.1521 21.4453 20.0486 21.3761 19.9615 21.289L15.0002 16.3258L10.039 21.289C9.9518 21.3761 9.84832 21.4453 9.73443 21.4924C9.62054 21.5396 9.49848 21.5639 9.37521 21.5639C9.25194 21.5639 9.12988 21.5396 9.01599 21.4924C8.9021 21.4453 8.79863 21.3761 8.71146 21.289C8.6243 21.2018 8.55515 21.0983 8.50798 20.9844C8.46081 20.8705 8.43653 20.7485 8.43653 20.6252C8.43653 20.5019 8.46081 20.3799 8.50798 20.266C8.55515 20.1521 8.6243 20.0486 8.71146 19.9615L13.6746 15.0002L8.71146 10.039C8.62415 9.95188 8.55489 9.84842 8.50762 9.73452C8.46036 9.62063 8.43604 9.49852 8.43604 9.37521C8.43604 9.2519 8.46036 9.12979 8.50762 9.0159C8.55489 8.902 8.62415 8.79855 8.71146 8.71146Z" fill="#282A35" fillOpacity="0.6"></path>
                        </svg>
                    </button>
                </div>

                <h3>Do you want to submit this question?</h3>
                {/* {console.log(props.question)} */}
                <p>Question: {props.question === undefined ? "" : props.question.questionText}</p>

                {checkForAnswers(props.question.answerOptions) ? "" : props.question.answerOptions.map(x => {
                    // console.log(x)
                    return <p key={x.answerText}>Answer: {x.answerText} Correct: {x.isCorrect === true ? "yes" : "no"}</p>
                })}

                <button className="btn-primary appBtn" onClick={() => handleSubmit()}>Submit Question</button>

            </div>

        </div>
    )
}

export default AddQuestion;