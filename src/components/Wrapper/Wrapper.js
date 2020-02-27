import React from "react";
import "./style.css";

function Wrapper(props) {
    return (
    <div className="row d-flex justify-content-center">
        {props.children}
    </div>
    )
}
export default Wrapper;