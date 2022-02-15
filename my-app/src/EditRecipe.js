import { Link } from "react-router-dom";
import React from "react";
import IngredientTable from "./IngredientTable";
const EditRecipe = () => {

    return (
        <div>
        <p>
            <Link to="/RecipeTable">
                <button>
                    Back
                </button>
            </Link>
        </p>
        <h2>
            Add Recipe
        </h2>
        <h4>
            You will need to fill this out completely
        </h4>
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit"/>
        </form>
        <table class="center" >
                <caption>View/Edit Ingredients</caption>
                <thead>
                    <tr>
                        <th>Ingredient Name</th>
                        <th>Amount</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <IngredientTableRow name="apple" amount="2"></IngredientTableRow>
                    <IngredientTableRow name="eggs" amount="12"></IngredientTableRow>
                    <IngredientTableRow name="chicken breast" amount="3"></IngredientTableRow>
                </tbody>
            </table>
    </div>
    );
}

export default EditRecipe;