import React from "react";
import { Link } from "react-router-dom";
import RecipeTableRow from "./RecipeTableRow";

const RecipeTable = () => {
    let data = require(".//microservice/data_write.json");
    let recipes = data["Recipes"];
    return (
        <div>
            <p>
                <Link to="/">
                    <button>
                        Back
                    </button>
                </Link>
            </p>

            <table class="center">
                <caption>View/Edit Recipes</caption>
                <thead>
                    <tr>
                        <th>Recipe Name</th>
                        <th>Ingredients</th>
                        <th>Edit Recipe</th> 
                    </tr>
                </thead>
                <tbody>
                {recipes.map((recipe) => <RecipeTableRow name = {recipe["recipe-name"]} ingredients = {recipe["recipe-list"]}> </RecipeTableRow>)}
                </tbody>
            </table>
        </div>
    );
}

export default RecipeTable;