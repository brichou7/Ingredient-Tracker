import React from "react";
import { FcMinus } from "react-icons/fc";
const IngredientTableRow = (props) => {
    return (
            <tr>
                <td>
                    {props.name}
                </td>
                <td>
                    {props.amount}
                </td>
                <td>
                    <FcMinus></FcMinus>
                </td>
            </tr>
    );
}

export default IngredientTableRow;