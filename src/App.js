import React from "react";
import { useState } from "react";
// components
import List from "./Components/List/List";

import Button from "@material-ui/core/Button";

const App = () => {
    const APP_ID = "4c4e8990";
    const APP_KEY = "dd268ffd9df9869bcbce1dccddbb9a12";
    // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");

    const getRecipes = async (search) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
            );
            const data = await response.json();

            setLoading(false);
            setRecipes(data.hits);
        } catch (err) {
            setErr(err);
            setLoading(false);
        }
    };

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const getSearch = (event) => {
        event.preventDefault();
        getRecipes(search);
        setSearch(" ");
    };

    return (
        <div className="app">
            <h1 className="header">
                <span>Search a recipe with </span>ingridients you have
            </h1>
            <form onSubmit={getSearch} className="search-form">
                <input
                    className="search-bar"
                    placeholder="Write only one ingredient"
                    type="text"
                    value={search}
                    onChange={handleChange}
                />
                <Button variant="contained" color="primary" type="submit">
                    Find
                </Button>
            </form>

            <List loading={loading} recipes={recipes} err={err} />
        </div>
    );
};

export default App;
