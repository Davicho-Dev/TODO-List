import { IconLoader2, IconPlus } from '@tabler/icons-react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

import type { SubmitHandler } from 'react-hook-form';

import { addTask } from '@RTK/slices';
import { useAppDispatch } from '@hooks';
import { useEffect, useState } from 'react';

export const NewTaskForm = () => {
	const [onLoading, setOnLoading] = useState<boolean>(false);

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
		setOnLoading(true);

		if (name) {
			dispatch(addTask({ name }));

			resetField('name');

			setTimeout(() => {
				setOnLoading(false);
			}, 1000);

			return;
		}

		toast.warning('Please enter a task name');

		setOnLoading(false);
	};

	return (
		<form
			onSubmit={handleSubmit(hdlAddTask)}
			className='h-14 flex bg-white dark:bg-neutral-900 rounded-md shadow-md overflow-hidden'
		>
			<fieldset className='grow inline-flex items-center'>
				<input
					type='text'
					className={`w-full h-full pl-4 dark:text-neutral-200 bg-transparent ring-0 ring-transparent outline-0 outline-transparent ${
						errors.name ? 'ring-2 ring-red-500' : ''
					}`}
					placeholder='What is to be done?'
					{...register('name')}
					minLength={5}
					maxLength={50}
				/>
				<span className='px-2 text-xs text-neutral-400'>
					{watch('name')?.length ?? 0}/50
				</span>
			</fieldset>
			<button
				disabled={watch('name')?.length < 5 || onLoading}
				className='w-14 h-full bg-primary disabled:bg-neutral-400 text-white inline-flex justify-center items-center'
				type='submit'
			>
				{onLoading ? (
					<IconLoader2 className='w-4 text-neutral-200 dark:text-neutral-600 duration-100 animate-spin' />
				) : (
					<IconPlus />
				)}
			</button>
		</form>
	);
};
