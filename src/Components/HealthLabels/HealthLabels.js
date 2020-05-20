import React from "react";
import uuid from "react-uuid";

const HealthLabels = ({ healthLabels }) => {
    return healthLabels.map((item) => {
        let newItem = item;
        let ItemWithoutMinus = newItem.replace(/-/gi, " ");
        return <span key={uuid()}>{`${ItemWithoutMinus},`}</span>;
    });
};

export default HealthLabels;
