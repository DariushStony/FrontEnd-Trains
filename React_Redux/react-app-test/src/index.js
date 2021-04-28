import React from "react";
import ReactDOM from "react-dom";
import './style.css';

class AddPersonForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            person: ""
        };
    }

    handleSubmit(event) {
        if (this.state.person != "") {
            this.props.handleSubmit(this.state.person);
            this.setPerson(event, "");
        }
        event.preventDefault();
    }

    handleChange(event) {
        let person = event.target.value;
        this.setState({
            person: person
        });
    }

    setPerson(event, str) {
        this.setState({
            person: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add New Contact"
                    onChange={this.handleChange} value={this.state.person} />
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

        this.addPerson = this.addPerson.bind(this);

        this.state = {
            contacts: this.props.data
        };
    }

    addPerson(name) {
        let cont = this.state.contacts;
        cont.push(name);
        console.log(cont);
        this.setState({
            contacts: cont
        });
    }

    render() {
        return (
            <div>
                <AddPersonForm handleSubmit={this.addPerson} />
                <Person data={this.state.contacts} />
            </div>
        );
    }
}

let contacts = ["Dariush", "Kianoosh", "Behnam", "Zahra"];

ReactDOM.render(
    <ContactManager data={contacts} />,
    document.getElementById("root")
);