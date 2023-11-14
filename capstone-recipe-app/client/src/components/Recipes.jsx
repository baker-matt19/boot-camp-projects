import React, { useEffect } from "react";
import Footer from "./Footer";
import { recipeCardMaker } from "../actions/recipeCardMaker";
import { useGet } from "../hooks/useGet";



const Recipes = (props) => {

    const [recipes] = useGet('/api/recipes'); // using my custom hook to get data from the database and assign it to the recipes variable

    // useEffect to render all of the recipes using the recipeCardMaker action once the rest of the page is rendered
    useEffect(() => {

        // creating the parent div set to recipeRenderHomeDiv
        let parent = document.getElementById('recipeRenderDiv');

        if(recipes !== null) {
            let data = recipes;
        for (let i = 0; i < data.length; i += 4) {
            const chunk = data.slice(i, i  + 4);
            let row = document.createElement('div');
            row.className = 'row';
            chunk.forEach(item => {
                recipeCardMaker(item, row)})
                parent.appendChild(row)
        }
        }
        // splitting the array into chunks of 4
        
    }, [recipes])

    return (
        <div id="recipesDiv">
            
            {/* the recipes from the database will be displayed on this page */}
            <div className="contentDiv">
    
                <h1 id="recipeHead">Recipes</h1>

                <p id="recipeText">Today's specials are...</p>

                <div id="recipeRenderDiv" className="recipeDiv">
                    {/* ternary so if the server can't load from the database it displays an error */}
                    {props.recipes === '' ? "We are currently experiencing difficulties with our server. Sorry for the inconvenience." : ""}
                </div>
                
            </div>
            
            <Footer /> 
        </div>
    )
}

export default Recipes;