import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { v4 } from 'uuid';

import type { ITaskProps, TTaskStatus } from '@interfaces';

const getInitialState = () => {
	const tasks = localStorage.getItem('tasks');

	if (tasks) {
		return {
			tasks: JSON.parse(tasks) as ITaskProps[],
		};
	}

	return {
		tasks: [],
	};
};

interface ITaskState {
	tasks: ITaskProps[];
}

const initialState: ITaskState = {
	...getInitialState(),
};

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (_state, { payload }: PayloadAction<{ name: string }>) => {
			const newTask = {
				...payload,
				id: v4(),
				status: 'pending' as TTaskStatus,
			};

			_state.tasks.unshift(newTask);
		},
		completeTask: (_state, { payload }: PayloadAction<{ id: string }>) => {
			const task = _state.tasks.find(({ id }) => id === payload.id);

			if (task) {
				task.status = 'completed';
			}
		},
		reOpenTask: (_state, { payload }: PayloadAction<{ id: string }>) => {
			const task = _state.tasks.find(({ id }) => id === payload.id);

			if (task) {
				task.status = 'pending';
			}
		},
		removeTask: (_state, { payload }: PayloadAction<{ id: string }>) => {
			_state.tasks = _state.tasks.filter(({ id }) => id !== payload.id);
		},
	},
});

export const { addTask, completeTask, removeTask, reOpenTask } =
	tasksSlice.actions;
