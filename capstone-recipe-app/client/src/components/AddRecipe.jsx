import React, { useState, useReducer } from "react";
import Footer from "./Footer";


const AddRecipe = (props) => {

    const [addRecipe, setAddRecipe] = useState(false); // setting the display for the addRecipe modal 

    const [recipe, setRecipe] = useReducer(
        (value, newDetails) => ({ ...value, ...newDetails }),
        {
            name: "",
            image: "",
            description: "",
            ingredients: "",
            directions: "",
            calories: 0,
            servings: 0,
            protein: 0,
            fat: 0,
            carbs: 0,
            category: ""
        }); // setting the initial values put in by the user and using a useReducer to be able to change the values in the inputs
    recipe.username = props.userObj.username; // setting the username to whoever is logged in

    // a function that will be called when the user confirms the details of the new recipe
    const handleSubmit = () => {
        // e.preventDefault();

        const headerOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        }

        // using a POST to post the recipe to the database
        fetch('/api/recipes', headerOptions)
            .then(res => res.json())
            .then(d => {
                console.log(d);
            });

        document.getElementById("name").value = "";
        document.getElementById("image").value = "";
        document.getElementById("description").value = "";
        document.getElementById("ingredients").value = "";
        document.getElementById("directions").value = "";
        document.getElementById("calories").value = "";
        document.getElementById("servings").value = "";
        document.getElementById("protein").value = "";
        document.getElementById("fat").value = "";
        document.getElementById("carbs").value = "";
        document.getElementById("category").value = "";
    }



    return (
        <div id="addRecipesDiv">

            {/* the recipe modal that displays when the user clicks the add recipe button */}
            <div id="addRecipeModal" className={addRecipe ? 'displayFlex myModal' : 'displayNone myModal'}>

                <div id="addRecipeModalDiv" className="myModalDiv">


                    <h3>Do you want to add this recipe to the database?</h3>
                    <p className="modalText">Name: <span className="modalSpan">{recipe.name}</span></p>
                    <p className="modalText">Image URL: <span className="modalSpan">{recipe.image}</span></p>
                    <p className="modalText">Description: <span className="modalSpan">{recipe.description}</span></p>
                    <p className="modalText">Ingredients: <span className="modalSpan">{recipe.ingredients}</span></p>
                    <p className="modalText">Directions: <span className="modalSpan">{recipe.directions}</span></p>
                    <p className="modalText">Calories: <span className="modalSpan">{recipe.calories}</span></p>
                    <p className="modalText">Servings: <span className="modalSpan">{recipe.servings}</span></p>
                    <p className="modalText">Protein: <span className="modalSpan">{recipe.protein}</span></p>
                    <p className="modalText">Fat: <span className="modalSpan">{recipe.fat}</span></p>
                    <p className="modalText">Carbs: <span className="modalSpan">{recipe.carbs}</span></p>
                    <p className="modalText">Category: <span className="modalSpan">{recipe.category}</span></p>

                    <div className="modalBtnDiv">
                        <button className="modalBtn btn btn-default" onClick={() => {
                            handleSubmit();
                            setAddRecipe(false);
                            document.getElementById("name").value = "";
                            document.getElementById("image").value = "";
                            document.getElementById("description").value = "";
                            document.getElementById("ingredients").value = "";
                            document.getElementById("directions").value = "";
                            document.getElementById("calories").value = "";
                            document.getElementById("servings").value = "";
                            document.getElementById("protein").value = "";
                            document.getElementById("fat").value = "";
                            document.getElementById("carbs").value = "";
                            document.getElementById("category").value = "";
                        }}>Yes</button>
                        <button className="modalBtn btn btn-default" onClick={() => setAddRecipe(false)}>No</button>
                    </div>


                </div>

            </div>

            <div id="recipePageDiv" className="contentDiv">

                <h3 id="addRecipeHead">Add your own recipe so the Peeps know you're there...</h3>
                <div id="addRecipeDiv" className="card cardStyle">

                        {/* the div that houses all the inputs for the user to put in their info */}
                    <div id="addRecipeContentDiv">

                        <label className="label">Name of Recipe: <br /><input className="userInput" name="name" id="name" onChange={(e) => {
                            setRecipe({ name: e.target.value })
                        }} placeholder="required" /></label><br />

                        <label className="label">Image URL:<br /> <input className="userInput" name="image" id="image" onChange={(e) => {
                            setRecipe({ image: e.target.value })
                        }} /></label>

                        <label className="label">Description:<br /> <textarea className="userInput" name="description" id="description" placeholder="required" onChange={(e) => {
                            setRecipe({ description: e.target.value })
                        }}></textarea></label>

                        <label className="label">Ingredients:<br /><textarea className="userInput" name="ingredients" id="ingredients" placeholder="required" onChange={(e) => {
                            setRecipe({ ingredients: e.target.value })
                        }}></textarea></label>

                        <label className="label">Directions: <br />
                            <textarea className="userInput" name="directions" id="directions" placeholder="required" onChange={(e) => {
                                setRecipe({ directions: e.target.value })
                            }}></textarea></label>

                        <label className="label">Calories: <br /><input className="userInput" name="calories" id="calories" onChange={(e) => {
                            setRecipe({ calories: e.target.value })
                        }} /></label>

                        <label className="label">Servings: <br /><input className="userInput" name="servings" id="servings" onChange={(e) => {
                            setRecipe({ servings: e.target.value })
                        }} /></label>

                        <label className="label">Protein: <br /><input className="userInput" name="protein" id="protein" onChange={(e) => {
                            setRecipe({ protein: e.target.value })
                        }} /></label>

                        <label className="label">Fat: <br /><input className="userInput" name="fat" id="fat" onChange={(e) => {
                            setRecipe({ fat: e.target.value })
                        }} /></label>

                        <label className="label">Carbs: <br /><input className="userInput" name="carbs" id="carbs" onChange={(e) => {
                            setRecipe({ carbs: e.target.value })
                        }} /></label>

                        <label className="label">Category: <br /><input className="userInput" name="category" id="category" placeholder="breakfast, lunch, dinner or dessert" onChange={(e) => {
                            setRecipe({ category: e.target.value })
                        }} /></label>

                    </div>




                </div>

                <button id="submitBtn" className="btn btn-default btn-muted" onClick={() => setAddRecipe(true)} type="button">Submit Recipe</ button>

            </div>

            <Footer />

        </div>
    )
}

export default AddRecipe;