import React from "react";
import "./style.css";

function Title(props) {
    return <div className="jumbotron text-center">
        <h1 className="display-2">{props.children}</h1>
    </div>;
}

export default Title;
