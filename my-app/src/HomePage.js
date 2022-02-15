import React from "react";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";


function HomePage() {
    return (
        <div>
            <h1>
                What would you like to do?
            </h1>
            <p>
                <Link to="/IngredientTable">
                    <button>
                        View/Edit Ingredients
                    </button>
                </Link>

            </p>
            <p>
                <Link to="/RecipeTable">
                    <button>
                        View/Edit Recipes
                    </button>
                </Link>

            </p>
            <h3>
                Click to track new ingredients in your fridge
                or add a new recipe to your collection!
            </h3>

        </div>
    )
}

export default HomePage;