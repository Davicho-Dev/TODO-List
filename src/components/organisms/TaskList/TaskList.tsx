import { Task } from '@molecules';

import type { ITaskProps } from '@interfaces';

interface ITasksProps {
	taskList: ITaskProps[];
}

export const TaskList = ({ taskList }: ITasksProps) => {
	return (
		<ul className='max-h-96 grid bg-white dark:bg-neutral-900 divide-y divide-neutral-100 dark:divide-neutral-600 rounded-md shadow-lg overflow-y-auto'>
			{taskList.length > 0 ? (
				taskList?.map(task => <Task key={task.id} {...task} />)
			) : (
				<h1 className='p-4 inline-flex gap-x-3 text-center'>No tasks yet.</h1>
			)}
		</ul>
	);
};
