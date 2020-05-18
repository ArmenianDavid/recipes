import React from "react";
import "../recipe.modul.css";

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className="recipe">
            <h1>{title}</h1>
            <ol>
                Ingredients
                {ingredients.map((ingredient) => {
                    return (
                        <li key={ingredient.text}>
                            {" "}
                            {ingredient.text}{" "}
                            <span className="weight">Weight</span>:{" "}
                            {Math.floor(ingredient.weight)} gram{" "}
                        </li>
                    );
                })}
            </ol>
            <p>{calories}</p>
            <img className="image" src={image} alt="img" />
        </div>
    );
};

export default Recipe;
