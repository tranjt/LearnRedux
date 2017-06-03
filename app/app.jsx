var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");




//Load foundation
require("style!css!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

//App css
require("style!css!applicationStyle");

// ReactDOM.render(    
//     <p>Redux examples</p>,
//     document.getElementById("app")
// );


require("./redux-example.jsx");
// require("./redux-todo-examples.jsx");
