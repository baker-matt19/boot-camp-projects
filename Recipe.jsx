import React from "react";

const Recipe = ({ title, image, ingredients, url}) => {
    return (
        <div className="recipe" >
            <h1>{title}</h1>
            <img className="image" src={image} alt="" />
            <ol>
                {ingredients.map(ingredient => {
                    return <li>{ingredient.text}</li>
                })}
            </ol>
            <a href={url} target="_blank" rel="noreferrer">Open recipe URL in new tab</a>
        </div>
    )
}

export default Recipe;