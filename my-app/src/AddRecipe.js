import { Link } from "react-router-dom";
import React from "react";

const AddRecipe = () => {
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
                Edit Recipe
            </h2>
            <h4>
                You will need to fill this out completely
            </h4>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <p>
                    <label>
                        Ingredients:
                        <input type="text" name="ingredients" />
                    </label>
                </p>
                <input type="submit" value="Submit"/>
            </form>

        </div>
    );
}

export default AddRecipe;