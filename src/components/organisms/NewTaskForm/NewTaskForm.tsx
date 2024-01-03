import { IconPlus } from '@tabler/icons-react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

import type { SubmitHandler } from 'react-hook-form';

import { addTask } from '@RTK/slices';
import { useAppDispatch } from '@hooks';

export const NewTaskForm = () => {
	const dispatch = useAppDispatch();

	const {
		handleSubmit,
		register,
		resetField,
		watch,
		formState: { errors },
	} = useForm<{
		name: string;
	}>();

	const hdlAddTask: SubmitHandler<{ name: string }> = ({ name }) => {
		if (name) {
			dispatch(addTask({ name }));

			resetField('name');

			return;
		}

		toast.warning('Please enter a task name');
	};
	return (
		<form
			onSubmit={handleSubmit(hdlAddTask)}
			className='h-14 flex bg-white dark:bg-neutral-900 rounded-md shadow-md overflow-hidden'
		>
			<input
				type='text'
				className={`grow w-full h-full pl-4 dark:text-neutral-200 bg-transparent ring-0 ring-transparent outline-0 outline-transparent ${
					errors.name ? 'ring-2 ring-red-500' : ''
				}`}
				placeholder='What is to be done?'
				{...register('name')}
			/>
			<button
				disabled={!watch('name')}
				className='w-14 h-full bg-primary disabled:bg-neutral-400 text-white inline-flex justify-center items-center'
				type='submit'
			>
				<IconPlus />
			</button>
		</form>
	);
};
