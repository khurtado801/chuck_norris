// #Viewed jokes reducer
function viewedJokesReducer(state = [], action) {
	// #Switch on action type
	switch(action.type) {
	case 'VIEWED_JOKES':
		state = [...state, action.jokes]; // #Set state equal to array, spread out its original state
		return state; // #Return state
	default:
		return state;
	}
}

// #Action creator, takes joke as a parameter
export function viewedJokes(jokes) {
	// #Action-return object whose type is HIDE_DIALOG
	return {
		type: 'VIEWED_JOKES',
		jokes
	};
}

export default viewedJokesReducer;