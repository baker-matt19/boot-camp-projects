import React, { useState }from 'react';
import './App.css';
import AddQuestion from './components/AddQuestion';
import Quiz from './components/Quiz';
import ScoreBoard from './components/ScoreBoard';


const App = () => {

  /*************** React Hooks ********************/
// ========DISPLAY=HOOKS========
const [quiz, setQuiz] = useState(false); // making a hook to set the display of the Quiz component
const [scoreBoard, setScoreBoard] = useState(false); // making a hook to set the display of the ScoreBoard component
const [resultsDiv, setResultsDivState] = useState(false); // 6/28/23----making a hook to set the display of the resultsDiv
const [statsDiv, setStatsDivState] = useState(false); // 6/28/23------making a hook to set the display of the statsDiv

//  ========QUIZ=HOOKS========
  const [devs, setDevs] = useState('');
  const [questions, setQuestions] = useState('');
  const [randomDev, setRandomDev] = useState(0);
  const [randomQues, setRandomQues] = useState(0);
  const [fetching, setFetching] = useState(false)
  const [scoreBaker, setScoreBaker] = useState(0);
  const [scoreStanley, setScoreStanley] = useState(0);
  const [scoreMartinez, setScoreMartinez] = useState(0);
  const [scoreDilka, setScoreDilka] = useState(0);
  const [scoreDay, setScoreDay] = useState(0);
  const [scoreMendenhall, setScoreMendenhall] = useState(0);
  const [scoreParkins, setScoreParkins] = useState(0);
  const [scoreDubois, setScoreDubois] = useState(0);
  const [scoreBull, setScoreBull] = useState(0);
  // 6/28/23-----HOOKS for WRONG ANSWERS-----
  const [wrongBull, setWrongBull] = useState(0)
  const [wrongBaker, setWrongBaker] = useState(0)
  const [wrongDay, setWrongDay] = useState(0)
  const [wrongDubois, setWrongDubois] = useState(0)
  const [wrongDilka, setWrongDilka] = useState(0)
  const [wrongParkins, setWrongParkins] = useState(0)
  const [wrongMendenhall, setWrongMendenhall] = useState(0)
  const [wrongStanley, setWrongStanley] = useState(0)
  const [wrongMartinez, setWrongMartinez] = useState(0)

  // ========ADD=QUESTION=HOOKS========
  const [question, setQuestion] = useState({
    questionText: "", 
    answerOptions: [
      { answerText: "", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false }
    ]
  });
  const [addQuestion, setAddQuestion] = useState(false);
  const [questionPrompt, setQuestionPrompt] = useState(false);
  const [questionForm, setQuestionForm] = useState(true); // setting display for questionForm


  /*************** Handler Functions *****************/
  // ========QUIZ=HANDLERS========
  const handleDevs = (arr) => {
    setDevs(arr);
  }
  const handleQuestions = (arr) => {
    setQuestions(arr);
  }
  const handleRandomDev = (num) => {
    setRandomDev(num);
  }
  const handleRandomQues = (num) => {
    setRandomQues(num);
  }
  const handleFetch = (bool) => {
    setFetching(bool);
  }
 const handleScoreBoard = (bool) => {
   setScoreBoard(bool);
 }

  // ========SCORE=BOARD=HANDLERS========
  const handleScoreBaker = (num) => {
    setScoreBaker(num);
  }
  const handleScoreStanley = (num) => {
    setScoreStanley(num);
  }
  const handleScoreMartinez = (num) => {
    setScoreMartinez(num);
  }
  const handleScoreDilka = (num) => {
    setScoreDilka(num);
  }
  const handleScoreDay = (num) => {
    setScoreDay(num);
  }
  const handleScoreMendenhall = (num) => {
    setScoreMendenhall(num);
  }
  const handleScoreParkins = (num) => {
    setScoreParkins(num);
  }
  const handleScoreDubois = (num) => {
    setScoreDubois(num);
  }
  const handleScoreBull = (num) => {
    setScoreBull(num);
  }
  const handleResultsDiv = (bool) => {
    setResultsDivState(bool)
  }
  const handleStatsDiv = (bool) => {
    setStatsDivState(bool)
  }
  const handleWrongBull = (num) => {
    setWrongBull(num)
  }
  const handleWrongBaker = (num) => {
    setWrongBaker(num)
  }
  const handleWrongDay = (num) => {
    setWrongDay(num)
  }
  const handleWrongDubois = (num) => {
    setWrongDubois(num)
  }
  const handleWrongDilka = (num) => {
    setWrongDilka(num)
  }
  const handleWrongMartinez = (num) => {
    setWrongMartinez(num)
  }
  const handleWrongMendenhall = (num) => {
    setWrongMendenhall(num)
  }
  const handleWrongStanley = (num) => {
    setWrongStanley(num)
  }
  const handleWrongParkins = (num) => {
    setWrongParkins(num)
  }
  // ========ADD=QUESTION=HANDLER========
  const handleQuestion = (obj) => {
    setQuestion(obj);
  }
  const handleAddQuestion = (bool) => {
    setAddQuestion(bool);
  }
  const handleQuestionForm = (bool) => {
    setQuestionForm(bool);
  }
  const handleQuestionPrompt = (bool) => {
    setQuestionPrompt(bool);
  }

  // console.log(randomDev);
  //   console.log(randomQues);
  

  return (
    <div className="App container-fluid">
      
      <div id="homeDiv" className="displayFlex">
            <button id="addQuestionBtn" className="btn-primary appBtn" onClick={() => {
              setAddQuestion(true);
              setQuestionForm(true);
              setQuestionPrompt(false);
            }}>Add Question</button>
        
            <button id="newGame" className="btn-primary appBtn" onClick={() => setQuiz(true)}>New Game</button>
        </div>

      <AddQuestion 
      question={question} handleQuestion={handleQuestion}
      addQuestion={addQuestion} handleAddQuestion={handleAddQuestion}
      questionForm={questionForm} handleQuestionForm={handleQuestionForm}
      questionPrompt={questionPrompt} handleQuestionPrompt={handleQuestionPrompt}
      />

      <Quiz devs={devs} handleDevs={handleDevs}
      questions={questions} handleQuestions={handleQuestions}
      randomDev={randomDev} handleRandomDev={handleRandomDev}
      randomQues={randomQues} handleRandomQues={handleRandomQues}
      fetching={fetching} handleFetch={handleFetch}
      // 6/28/23-------Added hooks for keeping track of wrong answers,also number of answers each Dev was asked
      wrongBull={wrongBull} handleWrongBull={handleWrongBull}
      wrongBaker={wrongBaker} handleWrongBaker={handleWrongBaker}
      wrongDay={wrongDay} handleWrongDay={handleWrongDay}
      wrongDilka={wrongDilka} handleWrongDilka={handleWrongDilka}
      wrongDubois={wrongDubois} handleWrongDubois={handleWrongDubois}
      wrongMendenhall={wrongMendenhall} handleWrongMendenhall={handleWrongMendenhall}
      wrongMartinez={wrongMartinez} handleWrongMartinez={handleWrongMartinez}
      wrongStanley={wrongStanley} handleWrongStanley={handleWrongStanley}
      wrongParkins={wrongParkins} handleWrongParkins={handleWrongParkins}
      // ---------
      scoreBaker={scoreBaker} handleScoreBaker={handleScoreBaker}
      scoreStanley={scoreStanley} handleScoreStanley={handleScoreStanley}
      scoreMartinez={scoreMartinez} handleScoreMartinez={handleScoreMartinez}
      scoreDilka={scoreDilka} handleScoreDilka={handleScoreDilka}
      scoreDay={scoreDay} handleScoreDay={handleScoreDay}
      scoreMendenhall={scoreMendenhall} handleScoreMendenhall={handleScoreMendenhall}
      scoreParkins={scoreParkins} handleScoreParkins={handleScoreParkins}
      scoreDubois={scoreDubois} handleScoreDubois={handleScoreDubois}
      scoreBull={scoreBull} handleScoreBull={handleScoreBull}
      quiz={quiz}
      handleScoreBoard={handleScoreBoard}
      />

     <ScoreBoard 
     scoreBaker={scoreBaker}
     scoreBull={scoreBull}
     scoreDay={scoreDay}
     scoreDilka={scoreDilka}
     scoreDubois={scoreDubois}
     scoreMartinez={scoreMartinez}
     scoreMendenhall={scoreMendenhall}
     scoreParkins={scoreParkins}
     scoreStanley={scoreStanley}
     scoreBoard={scoreBoard} handleScoreBoard={handleScoreBoard}
     //  6/28/23-----Added Hook for resultsDiv in scoreBoard
     resultsDiv={resultsDiv} handleResultsDiv = {handleResultsDiv}
     statsDiv={statsDiv} handleStatsDiv = {handleStatsDiv} 
     wrongBull={wrongBull}
     wrongBaker={wrongBaker}
     wrongDay={wrongDay}
     wrongDilka={wrongDilka}
     wrongDubois={wrongDubois}
     wrongMendenhall={wrongMendenhall}
     wrongMartinez={wrongMartinez}
     wrongParkins={wrongParkins}
     wrongStanley={wrongStanley}
     />

     {/* 6/27/23 Added authors div and in css file */}
    <div id='authors'>
      <p>Created by: Developer M.Baker and Developer R.Stanley copyright&copy; 2023</p>
    </div>
    </div>
  );
}

export default App;
