// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import type { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const tasksMiddleware = (state: MiddlewareAPI) => {
	return (next: Dispatch) => (action: Action) => {
		if (
			action.type !== 'tasks/addTask' &&
			action.type !== 'tasks/completeTask' &&
			action.type !== 'tasks/reOpenTask' &&
			action.type !== 'tasks/removeTask'
		) {
			next(action);
		}

		switch (action.type) {
			case 'tasks/addTask':
				toast
					.promise(new Promise(resolve => setTimeout(resolve, 1000)), {
						pending: 'Adding task...',
						success: 'Task added!',
						error: 'Error adding task!',
					})
					.then(() => {
						next(action);
					})
					.then(() => {
						const { tasks } = state.getState();

						localStorage.setItem('tasks', JSON.stringify(tasks.tasks));
					});

				break;

			case 'tasks/completeTask':
				toast.success('Task completed!');

				next(action);

				const { tasks } = state.getState();

				localStorage.setItem('tasks', JSON.stringify(tasks.tasks));

				break;

			case 'tasks/reOpenTask':
				toast
					.promise(new Promise(resolve => setTimeout(resolve, 1000)), {
						pending: 'Reopening task...',
						success: 'Task reopened!',
						error: 'Error reopening task!',
					})
					.then(() => {
						next(action);
					})
					.then(() => {
						const { tasks } = state.getState();

						localStorage.setItem('tasks', JSON.stringify(tasks.tasks));
					});

				break;

			case 'tasks/removeTask':
				toast
					.promise(new Promise(resolve => setTimeout(resolve, 1000)), {
						pending: 'Removing task...',
						success: 'Task removed!',
						error: 'Error removing task!',
					})
					.then(() => {
						next(action);
					})
					.then(() => {
						const { tasks } = state.getState();

						localStorage.setItem('tasks', JSON.stringify(tasks.tasks));
					});

				break;
		}
	};
};
