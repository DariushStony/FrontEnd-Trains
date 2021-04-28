import React from "react";
import ReactDOM from "react-dom";
import './style.css';

class AddPersonForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            perosn: ""
        };
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        let person = event.target.value;
        this.setState({
            person: person
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add New Contact"
                    onChange={this.handleChange} />
                <button type="submit">Add</button>
            </form>
        );
    }
}

class Person extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const arr = this.props.data;
        const listItems = arr.map((val, index) => {
            return <li key={index}>{val}</li>;
        });
        return (
            <ul>{listItems}</ul>
        );
    }
}

class ContactManager extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let contacts = ["Dariush", "Kianoosh", "Behnam", "Zahra"];
        return (
            <div>
                <AddPersonForm />
                <Person data={contacts} />
            </div>
        );
    }
}

ReactDOM.render(
    <ContactManager />,
    document.getElementById("root")
);