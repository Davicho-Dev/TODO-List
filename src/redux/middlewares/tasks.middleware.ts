// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import type { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';

export const tasksMiddleware = (state: MiddlewareAPI) => {
	return (next: Dispatch) => (action: Action) => {
		next(action);

		if (
			action.type === 'tasks/addTask' ||
			action.type === 'tasks/completeTask' ||
			action.type === 'tasks/reOpenTask' ||
			action.type === 'tasks/removeTask'
		) {
			const { tasks } = state.getState();

			localStorage.setItem('tasks', JSON.stringify(tasks.tasks));
		}
	};
};
