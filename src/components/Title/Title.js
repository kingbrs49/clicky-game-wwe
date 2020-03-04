import React from "react";
import "./style.css";

function Title(props) {
    return (
    <div className="jumbotron jumbotron-fluid text-center">
        <h1>{props.children}</h1>
    </div>
    )
}

export default Title;
