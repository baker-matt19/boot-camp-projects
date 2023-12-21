import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Recipe from "./Recipe";
// import { recipeCardMaker } from "../actions/recipeCardMaker";
// import { useGet } from "../hooks/useGet";



const Recipes = (props) => {

    // const[recipes] = useState(props.recipes);
    console.log(props.recipes)
    

    return (
        <div id="recipesDiv">
            
            {/* the recipes from the database will be displayed on this page */}
            <div className="contentDiv">
    
                <h1 id="recipeHead">Recipes</h1>

                <form onSubmit={props.getSearch} className="search-form">
                    <input className="search-bar" type="text" value={props.search} onChange={e => props.searchHandler(e.target.value)} />
                    <button className="search-button" type="submit">Search</button>
                </form>

                <div className="recipes">
                    
                    {props.recipes.map(recipe => {
                         return < Recipe 
                         key={recipe.recipe.label}
                         title={recipe.recipe.label}
                         image={recipe.recipe.image}
                         ingredients={recipe.recipe.ingredients}
                         url={recipe.recipe.url}
                         />   
                    })}
                    
                </div>
               
                
            </div>
            
            <Footer /> 
        </div>
    )
}

export default Recipes;