import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: '',
      recipeList: this.recipes,

    };
  }
  
  onSearchInput(searchString){
    let filterRecipe = 
      this.recipes.filter((recipe) => {
        return recipe.title.toLowerCase().includes(searchString.toLowerCase()) ||
        recipe.ingredients.toLowerCase().includes(searchString.toLowerCase())
      })
    this.setState({searchString: searchString, recipeList: filterRecipe})
  }

  render() { 
    var recipeResults = this.state.recipeList.map((recipe,index) => { return <RecipeItem key={index} recipe={recipe} filter={this.state.searchString}/> })
    return (
      <div className="App">
        <Navbar onChange={this.onSearchInput.bind(this)} value={this.state.searchString}/>
        <p>{this.state.searchString}</p>
        <div className="container mt-10">
          <div className="row">
            {recipeResults.length > 0 ? recipeResults : <h3 className="noResults">No Results to Show</h3>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
