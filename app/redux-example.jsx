var redux = require("redux");


console.log("starting redux example");

var actions = require("./actions/index");
var store = require("./store/configureStore").configure();
console.log(store);

// Subscribe to changes
var unsubscribe = store.subscribe(()=>{
    var state = store.getState();    

    console.log("New state ", store.getState());

    if (state.map.isFetching) {
        document.getElementById("app").innerHTML = "Loading...";
    } else if (state.map.url) {
        document.getElementById("app").innerHTML = `<a target="__blank" href="${state.map.url}">View your location</a>`;
    }
});
// unsubscribe();
 
var currentState = store.getState();

console.log("currentState ", currentState);

store.dispatch(actions.fetchLocation());


store.dispatch(actions.changeName("Joe"));


store.dispatch(actions.addHobby("Running"));
store.dispatch(actions.addHobby("Eating"));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName("Emily"));

store.dispatch(actions.addMovie("Cookie eater", "Action"));
store.dispatch(actions.addMovie("Batman", "Comedy"));
store.dispatch(actions.removeMovie(2));




