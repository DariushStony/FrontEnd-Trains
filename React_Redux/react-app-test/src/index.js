import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class MyForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
            description: 'The content of a textarea goes in the value attribute'
        };

        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
    }

    mySubmitHandler(event) {
        event.preventDefault();

        alert("Your Submitted Successfuly " + this.state.username);
    }

    myChangeHandler(event) {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "age") {
            if (!Number(val)) {
                alert("Your age must be a number!");
            }
        }
        this.setState({
            [nam]: val
        });
    }

    render() {
        let header = '';
        if (this.state.username) {
            header = <h1>Hello {this.state.username}</h1>;
        }
        else {
            // header = '';
        }
        return (
            <form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name: </p>
                <input type="text" name="username" onChange={this.myChangeHandler} />
                <input type="text" name="age" onChange={this.myChangeHandler} />
                <textarea value={this.state.description} />
                <select >
                    <option value="Ford">Ford</option>
                    <option value="Pride" selected>Pride</option>
                    <option value="Audi">Audi</option>
                </select>
                <input type="submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <MyForm />,
    document.getElementById("root")
);