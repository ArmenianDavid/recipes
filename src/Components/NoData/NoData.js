import React from "react";
import "./NoData.css";

const NoData = () => {
    return (
        <div className="nodata-container">
            <div>
                <h2>No recipes found reason may be</h2>
            </div>
            <ul>
                <li>You have not search anithing...</li>
                <li>No results found by your search...</li>
            </ul>
        </div>
    );
};

export default NoData;
