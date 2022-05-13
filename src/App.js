import './App.css';
import {useEffect, useState} from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID = "10d4d9e8";
  const MY_KEY = "e01f4374584ea1fcf1e3522042054294";

  const [mySearch, setMySearch] = useState ('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState ('avocado')

  useEffect (()=> {getRecipe()}, [wordSubmitted] )
  const getRecipe = async () => {
    const response = await fetch (`https://api.edamam.com/search?q=${wordSubmitted} &app_id=${MY_ID}&app_key=${MY_KEY}`)
    const data = await response.json();
    console.log (data.hits);
    setMyRecipes (data.hits)};
    

    const myRecipeSearch =(e) => {
      setMySearch(e.target.value)
    }

    const finalSearch = (e) => {
      e.preventDefault();
      setWordSubmitted(mySearch);
    }

  return (
  <div className="App">

  <div className="container"> 
      <video autoPlay muted loop>
      <source src={video} type="video/mp4"/>
      </video>
  <h1 >Find a Recipe</h1>
  </div>

  <div className="container">
    <form onSubmit= {finalSearch} >
    <input className='search' placeholder='search...' onChange={myRecipeSearch} value={mySearch}></input>
    </form>
    <button>
        <img src='https://img.icons8.com/fluency/48/000000/fry.png' className='icons' width="30px" />
      </button>
    </div>

    <div >
    {myRecipes.map (element => (
      <MyRecipesComponent 
      label ={element.recipe.label} 
      image = {element.recipe.image} 
      calories = {element.recipe.calories} 
      ingredients = {element.recipe.ingredientLines}
      cuisineType = {element.recipe.cuisineType} 
      link = {element.recipe.url}
      />
    ))}
  </div>

    </div>
  );
}

export default App;
