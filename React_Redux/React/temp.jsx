// Function Component
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Dariush" />
            <Welcome name="Kianoosh" />
            <Welcome name="Abtin" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

