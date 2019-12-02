import React from 'react';
import {useEffect,useState} from 'react'
import Recipe from './Components/Recipe'


const App  = () =>{
   
  const APP_ID = '4c4e8990';
  const APP_KEY = 'dd268ffd9df9869bcbce1dccddbb9a12';
  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('');


  useEffect(() => {
    getRecipes();
   
  }, [query] )
 

  const getRecipes = async () =>{
     const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
     const data = await response.json();
   
     setRecipes(data.hits);
        console.log(data.hits)
  }

  const updateSearch = (event) =>{
       setSearch(event.target.value);
       console.log(search)
  }

  const getSearch = (event) =>{
      event.preventDefault();
      setQuery(search);
      setSearch(' ');
  }
  

  return(
    <div className='app' >
      <h1 className='header'><span>Search a recipe with </span>ingridients you have</h1>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' placeholder='Write only one ingredient' type='text' value={search} onChange={updateSearch}  />
        <button className='search-button' type='submit'>Find</button>
      </form>
      <div className='recipes'>
      {recipes.map( recipe =>(
          <Recipe
             key={recipe.recipe.label} 
             title={recipe.recipe.label} 
             calories={recipe.recipe.calories}
             image={recipe.recipe.image}
             ingredients={recipe.recipe.ingredients}            
             />
      ))}
      </div>
    </div>
  )
}

export default App;
