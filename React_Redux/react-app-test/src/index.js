import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import  './ss.css';

class MyStyle extends React.Component {

    render() {
        const myStyle = {
            color: "red",
            backgroundColor: "black",
            padding: "10px",
            border: "1px solid blue"
        };
        return (
            <div>
                <h1 style={myStyle}>Hello World!</h1>
                <p id="p1">Add a little Style!</p>
                <p className="test">Add a little Style!</p>
            </div>
        );
    }

}

ReactDOM.render(
    <MyStyle />,
    document.getElementById("root")
);