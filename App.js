import React from "react";
import ReactDOM from "react-dom/client";

const reactElement = <h2>React Element!</h2>;

const number = 100;

const FunctionalComponent = ()=>(
    <div>
        {number}
        <h1>This is functional component!</h1>
        {reactElement}
        {console.log("inside a component")}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionalComponent/>);