import React from "react";
import IngredientTableRow from "./IngredientTableRow"
import { Link } from "react-router-dom";

const IngredientTable = () => {
    return (
        <div>
            <p>
                <Link to="/">
                    <button>
                        Back
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
                    <IngredientTableRow name="apple" amount="2"></IngredientTableRow>
                    <IngredientTableRow name="eggs" amount="12"></IngredientTableRow>
                    <IngredientTableRow name="chicken breast" amount="3"></IngredientTableRow>
                </tbody>
            </table>
        </div>
    );
}

export default IngredientTable;