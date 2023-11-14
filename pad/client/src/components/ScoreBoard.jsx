import React from "react";
// import "jquery" from './'


const ScoreBoard = ({
    scoreBaker,
    scoreBull,
    scoreDay,
    scoreDilka,
    scoreDubois,
    scoreMartinez,
    scoreMendenhall,
    scoreParkins,
    scoreStanley,
    scoreBoard,
    handleScoreBoard,
    resultsDiv,
    handleResultsDiv,
    statsDiv,
    handleStatsDiv,
    wrongBull,
    wrongBaker,
    wrongDay,
    wrongDilka,
    wrongDubois,
    wrongMendenhall,
    wrongMartinez,
    wrongParkins,
    wrongStanley,
}) => {

// const devs = ['Baker', 'Bull', 'Day', 'Dilka', 'Dubois', 'Martinez', 'Mendenhall', 'Parkins', 'Stanley']
    return (
        <div id="scoreBoardDiv" className={scoreBoard === true ? "displayFlex" : "displayNone"}>
            <div className={resultsDiv === true ? "displayNone" : "resultsDiv"}>
                <div id="scoreBoardCloseDiv">
                    <button id='scoreBoardClose' onClick={() => {
                        handleScoreBoard(false);

                    }} className="btn btn-default">
                        <svg width="50" height="50" viewBox='0 0 30 30'>
                            <path d="M8.71146 8.71146C8.79855 8.62415 8.902 8.55489 9.0159 8.50762C9.12979 8.46036 9.2519 8.43604 9.37521 8.43604C9.49852 8.43604 9.62063 8.46036 9.73452 8.50762C9.84842 8.55489 9.95188 8.62415 10.039 8.71146L15.0002 13.6746L19.9615 8.71146C20.0486 8.6243 20.1521 8.55515 20.266 8.50798C20.3799 8.46081 20.5019 8.43653 20.6252 8.43653C20.7485 8.43653 20.8705 8.46081 20.9844 8.50798C21.0983 8.55515 21.2018 8.6243 21.289 8.71146C21.3761 8.79863 21.4453 8.9021 21.4924 9.01599C21.5396 9.12988 21.5639 9.25194 21.5639 9.37521C21.5639 9.49848 21.5396 9.62054 21.4924 9.73443C21.4453 9.84832 21.3761 9.9518 21.289 10.039L16.3258 15.0002L21.289 19.9615C21.3761 20.0486 21.4453 20.1521 21.4924 20.266C21.5396 20.3799 21.5639 20.5019 21.5639 20.6252C21.5639 20.7485 21.5396 20.8705 21.4924 20.9844C21.4453 21.0983 21.3761 21.2018 21.289 21.289C21.2018 21.3761 21.0983 21.4453 20.9844 21.4924C20.8705 21.5396 20.7485 21.5639 20.6252 21.5639C20.5019 21.5639 20.3799 21.5396 20.266 21.4924C20.1521 21.4453 20.0486 21.3761 19.9615 21.289L15.0002 16.3258L10.039 21.289C9.9518 21.3761 9.84832 21.4453 9.73443 21.4924C9.62054 21.5396 9.49848 21.5639 9.37521 21.5639C9.25194 21.5639 9.12988 21.5396 9.01599 21.4924C8.9021 21.4453 8.79863 21.3761 8.71146 21.289C8.6243 21.2018 8.55515 21.0983 8.50798 20.9844C8.46081 20.8705 8.43653 20.7485 8.43653 20.6252C8.43653 20.5019 8.46081 20.3799 8.50798 20.266C8.55515 20.1521 8.6243 20.0486 8.71146 19.9615L13.6746 15.0002L8.71146 10.039C8.62415 9.95188 8.55489 9.84842 8.50762 9.73452C8.46036 9.62063 8.43604 9.49852 8.43604 9.37521C8.43604 9.2519 8.46036 9.12979 8.50762 9.0159C8.55489 8.902 8.62415 8.79855 8.71146 8.71146Z" fill="#282A35" fillOpacity="0.6"></path>
                        </svg>
                    </button>
                </div>

                <h3>Score Board</h3>

                <div className="scoreDiv">
                    Baker: {scoreBaker}
                </div>
                <div className="scoreDiv">
                    Bull: {scoreBull}
                </div>
                <div className="scoreDiv">
                    Day: {scoreDay}
                </div>
                <div className="scoreDiv">
                    Dilka: {scoreDilka}
                </div>
                <div className="scoreDiv">
                    Dubois: {scoreDubois}
                </div>
                <div className="scoreDiv">
                    Martinez: {scoreMartinez}
                </div>
                <div className="scoreDiv">
                    Mendenhall: {scoreMendenhall}
                </div>
                <div className="scoreDiv">
                    Parkins: {scoreParkins}
                </div>
                <div className="scoreDiv">
                    Stanley: {scoreStanley}
                </div>
                <button className="btn-primary appBtn" onClick={() => { handleResultsDiv(true); handleStatsDiv(true)}}>Stats</button>
            </div>
            <div className={statsDiv === true ? "statsDiv" : "displayNone"}>
                <h1>Stats</h1>
                <h3>Correct/Wrong</h3>
                <div id="statsContainer">
                    <div className="stat">
                        <p> Bull {scoreBull}/{wrongBull}</p>
                    </div>
                    <div className="stat">
                        <p>Baker {scoreBaker}/{wrongBaker}</p>
                        
                    </div>
                    <div className="stat">
                        <p>Day {scoreDay}/{wrongDay}</p>
                    </div>
                    <div className="stat">
                        <p>Dilka {scoreDilka}/{wrongDilka}</p>
                    </div>
                    <div className="stat">
                        <p>Dubois {scoreDubois}/{wrongDubois}</p>
                    </div>
                    <div className="stat">
                        <p>Martinez {scoreMartinez}/{wrongMartinez}</p>
                    </div>
                    <div className="stat">
                        <p>Mendenhall {scoreMendenhall}/{wrongMendenhall}</p>
                    </div>
                    <div className="stat">
                        <p>Parkins {scoreParkins}/{wrongParkins}</p>
                    </div>
                    <div className="stat">
                        <p>Stanley {scoreStanley}/{wrongStanley}</p>
                    </div>

            {/* {devs.map((x)=>{
                return <div key={x} className="stat">{wrongBull}</div>
            })} */}
                </div>
                <button className="btn-primary appBtn" onClick={() => { handleResultsDiv(false); handleStatsDiv(false)}} >results</button>
            </div>
        </div>
    )
}

export default ScoreBoard;