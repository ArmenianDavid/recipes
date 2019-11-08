import React from 'react';
import {useEffect,useState} from 'react'
import Recipe from './Components/Recipe'


const App  = () =>{
   
  const APP_ID = '4c4e8990';
  const APP_KEY = 'dd268ffd9df9869bcbce1dccddbb9a12';
  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('');


  useEffect(() => {
    getRecipes();
   
  },[])

  const getRecipes = async () =>{
     const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
     const data = await response.json();
   
     setRecipes(data.hits);
        console.log(data.hits)
  }
  

  return(
    <div className='App' >
      <form className='search-form'>
        <input className='search-bar' type='text' />
        <button className='search-button' type='submit'>Find</button>
      </form>
      
      {recipes.map( recipe =>(
          <Recipe
             key={recipe.recipe.label} 
             title={recipe.recipe.label} 
             calories={recipe.recipe.calories}
             image={recipe.recipe.image}
             />
      ))}
    </div>
  )
}

export default App;
