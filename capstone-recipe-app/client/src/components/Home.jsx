import React, { useEffect } from "react";
import Footer from "./Footer";
import { recipeCardMaker } from "../actions/recipeCardMaker";
import { useGet } from "../hooks/useGet";


const Home = (props) => {

    const [recipes] = useGet('/api/recipes'); // using my custom hook to get data from the database and assign it to the recipes variable

    // useEffect that calls my recipeCardMaker action and displays a random 4 recipes on the home page
    useEffect(() => {

        // creating the parent div set to recipeRenderHomeDiv
        let parent = document.getElementById('recipeRenderHomeDiv');

        // setting a random start point to begin the slice
        let ranStart = Math.floor(Math.random() * 9);

        // splitting the array into chunks of 4
        if(recipes !== null) {
            let data = recipes.slice(ranStart, (ranStart + 4));
        for (let i = 0; i < data.length; i += 4) {
            const chunk = data.slice(i, i  + 4);
            let row = document.createElement('div');
            row.className = 'row';
            chunk.forEach(item => {
                recipeCardMaker(item, row)})
                parent.appendChild(row)
        }
        }
        
    }, [recipes])

    return (
        <div id="homeDiv">

            {/* the home main info */}
            <div id="homeMain" className="contentDiv" >
                <h1 id="logo" className="homeTitle">reciPeeps</h1>
                <h1 id="welcome" className="homeTitle">The Hub for grub and everything delicious</h1>
                <p id="homeText">Here at reciPeeps the goal is the spread of delicious uncensored information. You will be able to post and find your favorite recipes as well as talk and interact with others that are just as passionate about one of the most beautiful things life has to offer. FUD!!!</p>
            </div>

            {/* the div where our 4 random recipes will be displayed */}
            <div id="homeRecipeDiv">
                <h4>A Sampling of Our Finest Recipes for Your Viewing Pleasure...</h4>
                <div id="recipeHomeRender"></div>
            </div>

            <div id="recipeRenderHomeDiv" className="recipeDiv">
                {/* ternary so if the server can't load from the database it displays an error */}
                {props.recipes === '' ? "We are currently experiencing difficulties with our server. Sorry for the inconvenience." : ""}
            </div>

            <Footer /> 

        </div>
    )
}

export default Home;