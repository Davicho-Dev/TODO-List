import { NewTaskForm, TaskList } from '@organisms';
import { useAppSelector } from '@hooks';

const HomePage = () => {
	const { tasks } = useAppSelector(state => state.tasks);

	return (
		<main className='w-screen h-screen py-16 px-6 lg:py-36 flex flex-col items-center bg-neutral-100 dark:bg-neutral-800'>
			<h1 className='text-6xl lg:text-8xl dark:text-neutral-200'>Task list</h1>
			<section className='w-full lg:w-1/3 mt-6 flex flex-col gap-y-6'>
				<NewTaskForm />
				<TaskList tasks={tasks} />
			</section>
		</main>
	);
};

export default HomePage;
