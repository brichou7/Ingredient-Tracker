import React from "react";
import { Link } from "react-router-dom";
import RecipeTableRow from "./RecipeTableRow";

const RecipeTable = () => {
    return (
        <div>
            <p>
                <Link to="/">
                    <button>
                        Back
                    </button>
                </Link>
                <Link to="/AddRecipe">
                    <button>
                        Add Recipe
                    </button>
                </Link>
            </p>

            <table class="center">
                <caption>View/Edit Recipes</caption>
                <thead>
                    <tr>
                        <th>Recipe Name</th>
                        <th>Edit Recipe</th> 
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <RecipeTableRow name="Chicken Parm"></RecipeTableRow>
                    <RecipeTableRow name="Salad"></RecipeTableRow>
                    <RecipeTableRow name="Sandwich"></RecipeTableRow>
                </tbody>
            </table>
        </div>
    );
}

export default RecipeTable;