//babel-cli:to run babel frm cmd
//babel-core:to run babel from tools like webpack
//babel-loader:teaches webpack to handle babel its a plugin
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));




/*class OldSyntax{
  constructor(){
    this.name = 'Mike';
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting(){
    return `hi name is ${this.name}`;
  }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());
//console.log(oldSyntax.getGreeting());
class NewSyntax {
name = 'Jen';
getGreeting=()=>{
  return `hi name is ${this.name}`;
}
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());*/

//import './utils.js';
/*import subtract, {square, add} from './utils.js';
import isSenior, {isAdult, canDrink} from './person.js';
//console.log("app.js !!!");
console.log(square(5));
console.log(add(100,23));
console.log(subtract(100,23));
console.log(isAdult(15));
console.log(canDrink(40));
console.log(isSenior(67));*/
/*const User = (props) =>{
  return(
  <div>
    <p>Name: {props.name}</p>

    <p>Age: {props.age}</p>
  </div>
  );
};*/
