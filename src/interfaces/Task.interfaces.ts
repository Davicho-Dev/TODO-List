interface ITaskProps {
	id: string;
	name: string;
	status: TTaskStatus;
}

type TTaskStatus = 'pending' | 'completed';

export type { ITaskProps, TTaskStatus };
