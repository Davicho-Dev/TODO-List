import { IconCheck, IconX } from '@tabler/icons-react';

import type { ITaskProps } from '@interfaces';

import styles from './Task.module.sass';

export const Task = ({ name, status }: ITaskProps) => {
	return (
		<li className={styles.task}>
			<button
				type='button'
				className={`w-5 h-5 inline-grid place-content-center leading-none border rounded-full transition-colors ease-in-out duration-500 ${
					status === 'pending'
						? 'border-neutral-600 dark:border-neutral-200'
						: 'border-neutral-400 dark:border-neutral-600'
				}`}
				// onClick={() => hdlCompleteTask({ id, status })}
			>
				{status === 'completed' ? (
					<IconCheck className='w-4 text-neutral-400 dark:text-neutral-600 transition-colors ease-in-out duration-500' />
				) : null}
			</button>
			<span
				className={`grow dark:text-neutral-200 relative transition-all ease-in-out duration-500 after:content-[''] after:absolute after:w-0 after:h-0 after:my-auto after:border-b after:border-b-neutral-200 after:dark:border-b-neutral-600 after:inset-y-0 after:left-0 after:transition-all after:ease-in-out after:duration-500 ${
					status === 'pending'
						? ''
						: 'text-neutral-400 dark:text-neutral-600 after:!w-full'
				}`}
			>
				{name}
			</span>
			<button
				// onClick={() => hdlDeleteTask({ id })}
				type='button'
				className={styles.task__actions}
			>
				<IconX className='w-full' />
			</button>
		</li>
	);
};
