import { StrictMode } from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ButtonToggle } from '@atoms';
import { router } from '@router';
import { store } from '@RTK/store';

import './styles/globals.sass';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
			<ButtonToggle />
		</Provider>
	</StrictMode>
);
