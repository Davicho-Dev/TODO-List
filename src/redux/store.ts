import { configureStore } from '@reduxjs/toolkit';

import { tasksMiddleware, uiMiddleware } from '@RTK/middlewares';
import { tasksSlice, uiSlice } from '@RTK/slices';

const middleware = [uiMiddleware, tasksMiddleware];

export const store = configureStore({
	reducer: {
		tasks: tasksSlice.reducer,
		ui: uiSlice.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(...middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
