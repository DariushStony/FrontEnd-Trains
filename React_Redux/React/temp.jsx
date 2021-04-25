class Foo extends React.Component{
    constructor( props ){
      super( props );
    }
      
    handleClick(event){
      console.log(this);
    }
      
    render(){
      return (
        <button type="button" onClick={this.handleClick}>
          Click Me
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Foo />,
    document.getElementById("root")
  );