import React from "react";
import { Link } from "react-router-dom";

const RecipeTableRow = (props) => {

    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.ingredients}
            </td>
            <td>
                <Link to="/EditRecipe">
                    <button>
                        Edit
                    </button>
                </Link>
            </td>
        </tr>
    );
}

export default RecipeTableRow;