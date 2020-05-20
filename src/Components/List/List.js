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
            {recipes.map((item) => {
                const { recipe } = item;
                return (
                    <Recipe
                        calories={recipe.calories}
                        healthLabels={recipe.healthLabels}
                        image={recipe.image}
                        ingredients={recipe.ingredients}
                        key={uuid()}
                        source={recipe.source}
                        title={recipe.label}
                    />
                );
            })}
        </div>
    );
};

export default List;
