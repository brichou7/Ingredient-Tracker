import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddRecipe from './EditRecipe';
import './App.css';
import HomePage from './HomePage';
import IngredientTable from './IngredientTable';
import RecipeTable from './RecipeTable';
import EditRecipe from './AddRecipe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/IngredientTable">
            <IngredientTable></IngredientTable>
          </Route>
          <Route exact path="/RecipeTable">
            <RecipeTable></RecipeTable>
          </Route>
          <Route exact path="/AddRecipe">
            <AddRecipe></AddRecipe>
          </Route>
          <Route exact path="/EditRecipe">
            <EditRecipe></EditRecipe>
          </Route>
          
        </Router>
      </header>
    </div>
  );
}

export default App;
