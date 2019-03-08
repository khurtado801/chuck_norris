import axios from 'axios';

const initialState = {
	joke: {
		id: '',
		value: '',
		icon_url: '',
		url: '',
		category: [],
	}
};

// #Action creators
const jokeReducer = (data = initialState, action) => {
	switch(action.type) {
	case 'GET_JOKE':
		return {
			joke: {
				category: action.data.category,
				id: action.data.id,
				value: action.data.value,
				icon_url: action.data.icon_url,
				url: action.data.url
			}
		};
	default:
		return data;
	}
};

// #Reducer
export const getJoke = (usrCateogry) => {
	let temp = usrCateogry;
	return function(dispatch) {
		axios.get(`https://api.chucknorris.io/jokes/random?category=${temp}`)
			.then(response => {
				let data = response.data;
				dispatch({
					type: 'GET_JOKE',
					data
				});
			})
			.catch(err => {
				console.error(err);
			});
	};
};

export default jokeReducer;