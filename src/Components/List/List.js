import React from "react";
// components
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import NoData from "../NoData/NoData";
import Recipe from "../Recipe";
import uuid from "react-uuid";

const List = ({ loading, recipes, err }) => {
    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }
    if (err) {
        return <Error err={err} />;
    }
    if (recipes.length === 0) {
        return <NoData />;
    }
    return (
        <div className="recipes">
            {recipes.map((recipe) => (
                <Recipe
                    key={uuid()}
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
