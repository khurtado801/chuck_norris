import axios from 'axios';

const JOKE_URL = 'https://api.chucknorris.io/jokes/categories';

// #Action creators
const categoriesReducer = (categories = { data: [] }, action) => {
	switch(action.type) {
	case 'GET_CATEGORIES':
		return {
			data: action.data
		};
	default:
		return categories;
	}
};

// #getCategories reducer
export const getCategories = () => {
	return dispatch => { // Call back function returns dispatch and call to axios for GET request
		axios.get(JOKE_URL)
			.then(response => {
				let {data} = response;
				dispatch({
					type: 'GET_CATEGORIES',
					data
				});
			})
			.catch(err => {
				console.error(err);
			});
	};
};

export default categoriesReducer;