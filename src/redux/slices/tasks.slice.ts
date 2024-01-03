import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { ITaskProps } from '@interfaces';
import { v4 } from 'uuid';

interface ITaskState {
	tasks: ITaskProps[];
}

const initialState: ITaskState = {
	tasks: [
		{
			id: v4(),
			name: 'Task 1',
			status: 'pending',
		},
		{
			id: v4(),
			name: 'Task 2',
			status: 'completed',
		},
		{
			id: v4(),
			name: 'Task 3',
			status: 'pending',
		},
		{
			id: v4(),
			name: 'Task 4',
			status: 'completed',
		},
		{
			id: v4(),
			name: 'Task 5',
			status: 'pending',
		},
		{
			id: v4(),
			name: 'Task 6',
			status: 'completed',
		},
	],
};

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (_state, { payload }: PayloadAction<ITaskProps>) => {
			_state.tasks.push(payload);
		},
		completeTask: (_state, { payload }: PayloadAction<{ id: string }>) => {
			const task = _state.tasks.find(({ id }) => id === payload.id);

			if (task) {
				task.status = 'completed';
			}
		},
		removeTask: (_state, { payload }: PayloadAction<{ id: string }>) => {
			_state.tasks = _state.tasks.filter(({ id }) => id !== payload.id);
		},
	},
});

export const { addTask, completeTask, removeTask } = tasksSlice.actions;
