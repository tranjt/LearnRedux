var redux = require("redux");

console.log("Todo redux example");
var stateDefault =  {
    searchText: "", 
    showCompleted: false, 
    todos: []
}

var reducer = (state = stateDefault, action) => {

    switch(action.type) {
        case "CHANGE_SEARCH_TEXT":
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
    }    
};

var store = redux.createStore(reducer, redux.compose(
      window.devToolsExtension ? window.devToolsExtension(): f => f
));
var currentState = store.getState();

//Subscribe to changes 
var unsubscribe = store.subscribe(()=> {
    var state = store.getState();
    console.log("Search text is ", state.searchText);
    document.getElementById("app").innerHTML = state.searchText;
});

console.log("currentState", currentState);

var action = {
    type: "CHANGE_SEARCH_TEXT",
    searchText: "Cookie"
};

store.dispatch(action);
console.log("New searchText should be Cookie",store.getState());


store.dispatch({
    type:"CHANGE_SEARCH_TEXT",
    searchText: "Super flour"
});

store.dispatch({
    type:"CHANGE_SEARCH_TEXT",
    searchText: "Buffalo wings"
});

