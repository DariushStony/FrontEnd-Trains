// Function Component
function Welcome(props) {
    return React.createElement(
        "h1",
        null,
        "Hello, ",
        props.name
    );
}

function App() {
    return React.createElement(
        "div",
        null,
        React.createElement(Welcome, { name: "Dariush" }),
        React.createElement(Welcome, { name: "Kianoosh" }),
        React.createElement(Welcome, { name: "Abtin" })
    );
}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));