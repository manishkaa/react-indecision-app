console.log("utils.js is running");
 const square = (x) => x * x;
 const add=(a,b) => a+b;
//export{square, add};
 const subtract = (a,b) => a-b;
 export{ square, add, subtract as default };
//export default subtract;
//export default (a,b) => a-b; we dont even need const for short exp
//export default const subtract = (a,b) => a-b; gives error since we cant use export default with declaration
