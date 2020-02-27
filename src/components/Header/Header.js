import React from 'react';

const Header = (props)=> (
    <nav style={{background: "Black", color: "red", }} className={"navbar navbar-default sticky-top"}>
        <div className={"container"}>
            <div>
                <p className="lead">
                    <b>WWE Clicky Game</b>
                </p>
            </div>
            <div>
                <p className="lead">
                    Score: <b>{props.score}</b>
                </p>
            </div>
            <div>
                <p className="lead">
                    Top Score: <b>{props.topScore}</b>
                </p>
            </div>
        </div>
    </nav>
);

export default Header;