import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categories from './categories';
import jokes from './jokes';
import joke from './joke';
import viewedJokes from './viewedJokes';


// #Create store
const rootReducer = (combineReducers({ categories, joke, jokes, viewedJokes }));
const middleware = [thunk];
const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	) // #Define const store, set equal to createStore. Pass in rootReducer to store
);

export default store;