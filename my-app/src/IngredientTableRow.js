import React from "react";
const IngredientTableRow = (props) => {
    return (
            <tr>
                <td>
                    {props.name}
                </td>
                <td>
                    {props.amount}
                </td>
            </tr>
    );
}

export default IngredientTableRow;