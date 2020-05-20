import React from "react";
import uuid from "react-uuid";

import Typography from "@material-ui/core/Typography";

const Ingredients = ({ ingredients }) => {
    return (
        <>
            <Typography paragraph>Ingredients:</Typography>
            {ingredients.map((item) => {
                const weight = item.weight;
                const rounded = parseFloat(weight.toFixed(1));
                return (
                    <Typography key={uuid()} paragraph>
                        {item.text} {rounded} gram
                    </Typography>
                );
            })}
        </>
    );
};

export default Ingredients;
