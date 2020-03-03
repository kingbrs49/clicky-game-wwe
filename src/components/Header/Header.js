import React from 'react';

const Header = (props)=> (
    <nav style={{background: "Black", color: "red", }} className={"navbar navbar-default sticky-top"}>
        <div className={"container"}>
            <div>
                <h4 className="lead">
                    <b>WWE Clicky Game</b>
                </h4>
            </div>
            <div>
                <h4 className="lead">
                    Score: <b>{props.score}</b>
                </h4>
            </div>
            <div>
                <h4 className="lead">
                    Top Score: <b>{props.topScore}</b>
                </h4>
            </div>
        </div>
    </nav>
);

export default Header;