// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import type { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';

import type { RootState } from '@RTK/store';

export const uiMiddleware = (state: MiddlewareAPI) => {
	return (next: Dispatch) => (action: Action) => {
		next(action);

		if (action.type === 'ui/toggleDarkMode') {
			const { ui } = state.getState() as RootState;

			document.body.className = ui.isDarkMode ? 'dark' : 'light';

			localStorage.setItem('currentTheme', ui.isDarkMode ? 'dark' : 'light');
		}
	};
};
