import React from 'react';
import SignUp from './pages/SignUp';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';

function App() {
	const theme = createTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 900,
				custom: 1153,
				lg: 1200,
			},
		},
		palette: {
			primary: {
				main: '#111111',
				light: '#777777',
			},
			background: {
				default: '#DDDDDD',
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<Routes>
				<Route index element={<SignUp />} />
				<Route path='/main' element={<Main />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
