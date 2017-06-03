var redux = require("redux");

console.log("starting redux example");

var stateDefault = {
    name: "Anonymous",
    hobbies: [],
    movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;
var oldReducer = (state = stateDefault, action)=> {
    //state = state || {name: "Anonymous"};
    
    switch(action.type) {
        case "CHANGE_NAME":
            return {
                ...state,
                name: action.name
            };
        case "ADD_HOBBY":
            return {
                ...state,
                hobbies: [...state.hobbies, 
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }                    
                ]
            };
        case "REMOVE_HOBBY":
            return {
                ...state,
                hobbies: state.hobbies.filter((hobby)=> hobby.id !== action.id)
            };

        case "ADD_MOVIE":
            return {
                ...state,
                movies: [...state.movies,
                    {
                        id: nextMovieId++,
                        title: action.title,
                        genre: action.genre
                    }
                ]
            };
        case "REMOVE_MOVIE":
            return {
                ...state,
                movies: state.movies.filter((movie)=> movie.id !== action.id)
            };
        default:
            return state;
    }    
};

var nameReducer = (state = "Anonymous", action)=> {
    switch(action.type) {
        case "CHANGE_NAME":
            return action.name
        default: 
            return state;
    };
};

var hobbiesReducer = (state = [], action)=> {
    switch(action.type) {
        case "ADD_HOBBY":
            return [
                ...state, 
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }     
            ];
        case "REMOVE_HOBBY":
            return state.filter((hobby)=> hobby.id !== action.id);
        default: 
            return state;
    };
};

var moviesReducer = (state = [], action)=> {
    switch(action.type) {
        case "ADD_MOVIE":
            return [
                ...state,
                {
                    id: nextMovieId++,
                    title: action.title,
                    genre: action.genre
                }
            ];
        case "REMOVE_MOVIE":
            return state.filter((movie)=> movie.id !== action.id);
        default:
            return state;
    }
};

var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
   
});

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension(): f => f
));


// Subscribe to changes
var unsubscribe = store.subscribe(()=>{
    var state = store.getState();
    console.log("Name is ", state.name);
    document.getElementById("app").innerHTML = state.name;

    console.log("New state ", store.getState());
});
// unsubscribe();

var currentState = store.getState();

console.log("currentState ", currentState);

var action = {
    type: "CHANGE_NAME",
    name: "Joe"
};

store.dispatch(action);


store.dispatch({
    type:"ADD_HOBBY",
    hobby: "Running"
})


store.dispatch({
    type:"ADD_HOBBY",
    hobby: "Eating"
})

store.dispatch({
    type:"REMOVE_HOBBY",
    id:2
})

store.dispatch({
    type: "CHANGE_NAME",
    name: "Dolda"
});

store.dispatch({
    type: "ADD_MOVIE",
    title: "Super",
    genre: "Action"
})


store.dispatch({
    type: "ADD_MOVIE",
    title: "Sauce",
    genre: "Comedy"
})

store.dispatch({
    type: "REMOVE_MOVIE",
    id: 2
})




