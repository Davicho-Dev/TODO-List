import { Task } from '@molecules';

import type { ITasksProps } from './TaskList.interfaces';

export const TaskList = ({ tasks }: ITasksProps) => {
	return (
		<ul className='max-h-96 grid bg-white dark:bg-neutral-900 divide-y divide-neutral-100 dark:divide-neutral-600 rounded-md shadow-lg overflow-y-auto'>
			{tasks.length > 0 ? (
				tasks?.map(task => <Task key={task.id} {...task} />)
			) : (
				<h1 className='p-4 inline-flex gap-x-3 text-center dark:text-neutral-200'>
					No tasks yet.
				</h1>
			)}
		</ul>
	);
};
