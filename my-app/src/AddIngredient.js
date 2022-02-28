import { Link } from "react-router-dom";
import React, { useState } from "react";

const AddIngredient = () => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)

    function updateIngredients() {
        const newIngredient = { name, amount };
        var fs = require('browserify-fs');
        fs.writeFile(".//microservice/data_read.json", JSON.stringify(newIngredient), (error) => {
            if (error) throw error;
          });
        console.log(require(".//microservice/data_read.json"));
    }

    return (
        <div>
            <p>
                <Link to="/IngredientTable">
                    <button>
                        Back
                    </button>
                </Link>
            </p>
            <h2>
                Add Ingredient
            </h2>
            <h4>
                You will need to fill this out completely
            </h4>
            <form onClick = {updateIngredients}>
                <p>
                    <label>
                        Name:
                        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                    </label>
                </p>
                <p>
                    <label>
                        Amount:
                        <input type="number" name="amount" value={amount} onChange={e => setAmount(e.target.value)} />
                    </label>
                </p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default AddIngredient;