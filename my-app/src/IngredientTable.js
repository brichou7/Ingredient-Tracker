import React from "react";
import IngredientTableRow from "./IngredientTableRow"
import { Link } from "react-router-dom";

const IngredientTable = () => {
    let data = require(".//microservice/data_write.json");
    let ingredients = data["Ingredients"]
    return (
        <div>
            <p>
                <Link to="/">
                    <button>
                        Back
                    </button>
                </Link>
                <Link to="/AddIngredient">
                    <button>
                        Add Ingredient
                    </button>
                </Link>
            </p>
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
                {ingredients.map((ingred) => <IngredientTableRow name = {ingred["ingredient-name"]} amount = {ingred["ingredient-quantity"]}> </IngredientTableRow>)}
                </tbody>
            </table>
        </div>
    );
}

export default IngredientTable;