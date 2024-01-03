import { useState } from 'react';

import { IconCheck, IconLoader2, IconX } from '@tabler/icons-react';

import { completeTask, removeTask, reOpenTask } from '@RTK/slices';
import { useAppDispatch } from '@hooks';

import type { ITaskProps } from '@interfaces';

import styles from './Task.module.sass';

export const Task = ({ name, status, id }: ITaskProps) => {
	const [onLoading, setOnLoading] = useState<boolean>(false);

	const dispatch = useAppDispatch();

	const hdlCompleteTask = () => {
		setOnLoading(true);

		if (status === 'pending') {
			dispatch(completeTask({ id }));
		} else {
			dispatch(reOpenTask({ id }));
		}

		setTimeout(() => {
			setOnLoading(false);
		}, 1000);
	};

	const hdlRemoveTask = () => {
		dispatch(removeTask({ id }));
	};

	return (
		<li
			className={`${styles.task} ${
				status === 'completed' ? styles['task--completed'] : ''
			}`}
		>
			<button
				type='button'
				title='Complete task'
				className={`w-5 h-5 inline-grid place-content-center leading-none border rounded-full ${
					status === 'pending'
						? 'border-neutral-600 dark:border-neutral-200'
						: 'bg-primary border-transparent'
				}`}
				onClick={hdlCompleteTask}
			>
				{onLoading ? (
					<IconLoader2 className='w-4 text-neutral-200 dark:text-neutral-600 duration-100 animate-spin' />
				) : status === 'completed' ? (
					<IconCheck className='w-4 text-neutral-200 dark:text-neutral-600 duration-100' />
				) : null}
			</button>
			<div className='grow'>
				<span
					className={`dark:text-neutral-200 relative after:content-[''] after:absolute after:w-0 after:h-0 after:my-auto after:border-b after:border-b-neutral-200 after:dark:border-b-neutral-600 after:inset-y-0 after:left-0 ${
						status === 'pending'
							? ''
							: 'text-neutral-400 dark:text-neutral-600 after:!w-full'
					}`}
				>
					{name}
				</span>
			</div>
			<button
				onClick={hdlRemoveTask}
				type='button'
				className={`${styles.task__actions} dark:text-neutral-200`}
				title='Delete task'
			>
				<IconX className='w-full' />
			</button>
		</li>
	);
};
