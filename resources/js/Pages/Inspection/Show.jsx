import React from "react";

const Show = ({ inspection }) => {
    return (
        <div>
            <h1>Show</h1>
            <pre>{JSON.stringify(inspection, 2, 2)}</pre>
        </div>
    );
};

export default Show;
