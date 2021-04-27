import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


// function Car() {
//     return <h2>Hi, I am also a Car!</h2>;
// }

class Car extends React.Component {

    constructor() {
        super();
        // this.state = { color: "red" }
    }

    render() {
        return <h2>Hi, I am a {this.props.color} Car!</h2>;
    }
}

class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my garage?</h1>
                <Car />
                <App />
            </div>
        );
    }
}


ReactDOM.render(
    <Garage />,
    document.getElementById("root")
);