import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class Football extends React.Component {
    constructor(props) {
        super(props);

        this.shoot = this.shoot.bind(this);
    }
    shoot(a) {
        alert(a);
    }
    render() {
        return (
            <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
        );
    }
}

ReactDOM.render(
    <Football />,
    document.getElementById("root")
);