import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class Containter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true };

        this.delHeader = this.delHeader.bind(this);
    }

    delHeader() {
        this.setState({
            show: false
        });
    }

    render() {
        let header;
        if (this.state.show) {
            header = <Child />;
        }
        return (
            <div>
                {header}
                <button onClick={this.delHeader}>Delete</button>
            </div>
        );
    }
}

class Child extends React.Component {

    componentWillUnmount() {
        alert("is about unmount");
    }

    render() {
        return (
            <h1>Hello, World!</h1>
        );
    }
}

ReactDOM.render(
    <Containter />,
    document.getElementById("root")
);