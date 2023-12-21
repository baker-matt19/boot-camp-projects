import React from "react";
import Footer from "./Footer";



const Home = (props) => {


    return (
        <div id="homeDiv">

            {/* the home main info */}
            <div id="homeMain" className="contentDiv" >
                <h1 id="logo" className="homeTitle">reciPeeps</h1>
                <h1 id="welcome" className="homeTitle">The Hub for grub and everything delicious</h1>
                <p id="homeText">Here at reciPeeps the goal is the spread of delicious uncensored information. You can search the massive edamam recipe database for your favorite recipes. All the best inspiration for one of the most beautiful things life has to offer. FUD!!!</p>
            </div>

            {/* the div where our 4 random recipes will be displayed */}
            <div id="homeRecipeDiv">
                <h4>A Sampling of Our Finest Recipes for Your Viewing Pleasure...</h4>
                <div id="recipeHomeRender">
                    <a href="/recipes">Recipes</a>
                </div>
            </div>

            

            <Footer /> 

        </div>
    )
}

export default Home;