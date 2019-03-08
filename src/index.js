import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import store from './redux';
import App from './App';
import './styles/index.css';

const theme = createMuiTheme();

ReactDOM.render(
	// #Give app access to store
	<Provider store={store}>
		<BrowserRouter>
			<MuiThemeProvider theme={theme}>
				<App />
			</MuiThemeProvider>
		</BrowserRouter>
	</Provider>
	, document.getElementById('root')
);