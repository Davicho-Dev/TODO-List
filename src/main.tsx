import { StrictMode } from 'react';

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import App from './App.tsx';

import './styles/globals.sass';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider>
			<App />
		</RouterProvider>
	</StrictMode>
);
