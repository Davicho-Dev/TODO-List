// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import type { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';

export const tasksMiddleware = (state: MiddlewareAPI) => {
	return (next: Dispatch) => (action: Action) => {
		next(action);

		console.log(state);
	};
};
