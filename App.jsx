import React, { useEffect, useState } from "react";
import "./App.css";
import "./mediaQs.css";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
// import AddRecipe from "./components/AddRecipe";
// import MessageBoards from "./components/MessageBoards";
import Contact from "./components/Contact";

const App = () => {

    // =======HOOKS========

    // ========NAV=HOOKS=========
    // setting a hook to handle the display of the linkDiv
    const [linkDiv, setLinkDiv] = useState(true); 
    // creating a handler function to handle the toggle of the linkDiv display
    const linkDivHandler = (bool) => {
        setLinkDiv(bool);
    }
    
    
    // ========EDAMAM=HOOKS============
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("random");

    // ========GET=RECIPES==============
    // Gets recipes from the edamam api through the server
    const getRecipes = async () => {
        const response = await axios.get(
            `http://localhost:5000/recipes/${query}`
        )
        console.log(response.data)
        setRecipes(response.data)
    }

    // useEffect to call out getRecipes function after everything else has rendered
    useEffect(() => {
        getRecipes()
    }, [query])

    // function to handle the search through the edamam api
    const getSearch = (e) => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }
    // handler functions to pass down the values for my hooks
    const recipesHandler = (obj) => {
        setRecipes(obj);
    }
    const searchHandler = (obj) => {
        setSearch(obj);
    }
    // const queryHandler = (obj) => {
    //     setQuery(obj);
    // }

    

    // ========CONTACT=HOOKS========
    const [addIssue, setAddIssue] = useState(false);
     
    // ========CONTACT=HANDLERS========
    const addIssueHandler = (bool) => {
        setAddIssue(bool);
    }
    
    // console.log(recipes)

    return (
        <div id="mainAppDiv">
            <Nav
            linkDiv={linkDiv} linkDivHandler={linkDivHandler}
            />
            <Switch>

                <Route path="/recipes"><Recipes 
                recipes={recipes} recipesHandler={recipesHandler}
                search={search} searchHandler={searchHandler}
                query={query}
                getSearch={getSearch}
                 /></Route>

            

                <Route path="/contact"><Contact
                    addIssue={addIssue} addIssueHandler={addIssueHandler}
                /></Route>

                <Route path="/"><Home recipes={recipes} /></Route>
            </Switch>



        </div>
    )
};

export default App;