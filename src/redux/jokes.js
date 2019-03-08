import axios from 'axios';

const inititalState = {
	jokes: []
};

// #Reducer
const jokesReducer = (state = inititalState, action)  => {
	switch(action.type) {
	case 'GET_JOKE_LIST':
		return {
			...state, // #Spread state of initialState array
			jokes: action.payload
		};
	default:
		return state;
	}
};

// #Action creator
export const getJokeList = (userInput) => dispatch => {
	axios.get(`https://api.chucknorris.io/jokes/search?query=${userInput}`)
		.then(response => { // #On promise
			let data = response.data.result; // #Set data equal to response.data.result
			dispatch({
				type: 'GET_JOKE_LIST',
				payload: data
			});
		})
		.catch(err => {
			console.error(err);
		});
};

export default jokesReducer;