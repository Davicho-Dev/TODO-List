import { createSlice } from '@reduxjs/toolkit';

const getTheme = () => {
	const currentTheme = localStorage.getItem('currentTheme');

	document.body.className = currentTheme ? currentTheme : 'light';

	if (currentTheme) {
		return { isDarkMode: currentTheme === 'dark' };
	}

	return { isDarkMode: false };
};

interface IUIState {
	isDarkMode: boolean;
}

const initialState: IUIState = { ...getTheme() };

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleDarkMode: state => {
			state.isDarkMode = !state.isDarkMode;
		},
	},
});

export const { toggleDarkMode } = uiSlice.actions;
