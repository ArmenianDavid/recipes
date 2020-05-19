import React from "react";
import Loading from "../Loading/Loading";
import Recipe from "../Recipe";

const List = ({ loading, recipes }) => {
    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }
    return (
        <div className="recipes">
            {recipes.map((recipe) => (
                <Recipe
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                />
            ))}
        </div>
    );
};

export default List;
