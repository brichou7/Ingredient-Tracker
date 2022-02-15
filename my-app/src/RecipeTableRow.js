import React from "react";
import { Link } from "react-router-dom";
import { FcMinus } from "react-icons/fc";
const RecipeTableRow = (props) => {

    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                <Link to = "/EditRecipe">
                    <button>
                        Edit
                    </button>
                    </Link>
            </td>
            <td>
                <FcMinus></FcMinus>
            </td>
        </tr>
    );
}

export default RecipeTableRow;