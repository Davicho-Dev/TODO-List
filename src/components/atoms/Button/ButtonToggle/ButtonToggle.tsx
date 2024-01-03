import { useAppDispatch, useAppSelector } from '@hooks';
import { toggleDarkMode } from '@RTK/slices';
import { IconMoon, IconSun } from '@tabler/icons-react';

export const ButtonToggle = () => {
	const { isDarkMode } = useAppSelector(state => state.ui);
	const dispatch = useAppDispatch();

	const hdlToggleTheme = () => {
		dispatch(toggleDarkMode());
	};

	return (
		<button
			type='button'
			className='w-12 h-12 flex justify-center items-center dark:text-neutral-200 bg-white dark:bg-neutral-900 rounded-full shadow-md fixed right-4 bottom-4'
			onClick={hdlToggleTheme}
		>
			{isDarkMode ? <IconMoon /> : <IconSun />}
		</button>
	);
};
