class VisibiltyToggle extends React.Component{
  constructor(props){
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility : false
    };
  }
  handleToggleVisibility(){
    this.setState((prevState)=>{
      return{
        visibility: !prevState.visibility
      };
    });
  }
  render(){
    return (
      <div>
      <h1>Visibility Toggle</h1>
      <button onClick={this.handleToggleVisibility}>
      {this.state.visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {this.state.visibility && (
        <div>
        <p>Hey, These are some details you can now see!</p>
        </div>
      )}
      </div>
    );
  }
}
ReactDOM.render(<VisibiltyToggle />,document.getElementById('app'));

/* let visibility = false;
const toggleVisibility = () =>{
  visibility = !visibility;
  render():
};
const rensder = () => {
  const jsx = (
    <div>
    <h1>Visibility Toggle</h1>
    <button onClick={toggleVisibility}>
    {visibility ? 'Hide Details' : 'Show Details'}
    </button>
    {visibility && (
      <div>
      <p>Hey, These are some details you can now see!</p>
      </div>
    )}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
};
render(); */
