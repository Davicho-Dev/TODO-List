import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: { port: 3000 },
	preview: { port: 3000 },
	resolve: {
		alias: {
			'@atoms': path.resolve(__dirname, './src/components/atoms/index.ts'),
			'@molecules': path.resolve(
				__dirname,
				'./src/components/molecules/index.ts'
			),
			'@organisms': path.resolve(
				__dirname,
				'./src/components/organisms/index.ts'
			),
			'@templates': path.resolve(
				__dirname,
				'./src/components/templates/index.ts'
			),
			'@hooks': path.resolve(__dirname, './src/hooks/index.ts'),
			'@interfaces': path.resolve(__dirname, './src/utils/interfaces/index.ts'),
			'@pages': path.resolve(__dirname, './src/pages/index.ts'),
			'@RTK/store': path.resolve(__dirname, './src/redux/index.ts'),
			'@RTK/middlewares': path.resolve(
				__dirname,
				'./src/redux/middlewares/index.ts'
			),
			'@RTK/slices': path.resolve(__dirname, './src/redux/slices/index.ts'),
			'@router': path.resolve(__dirname, './src/router/index.ts'),
			'@styles': path.resolve(__dirname, './src/styles/'),
			'@utils': path.resolve(__dirname, './src/utils/index.ts'),
		},
	},
});
