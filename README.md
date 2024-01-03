# TODO List


### 1. Initial setup:
	- Create a React project.
	- Set up the dependencies needed to work with React and any other tools you find useful.

### 2. Components:
	- Create a `TaskList` component that displays a list of tasks. It should receive a list of tasks as props and display them in the interface.
	- Create a `Task` component that represents an individual task. This component must have the ability to mark a task as completed or delete it.

### 3. Functionality:
	- Implements the ability to add a new task. There must be a text field and a button to add the task to the list.
	- Allows a task to be marked as completed. Clicking on the task should change its status to completed and visually display this change.
	- Adds the functionality to delete a task. There should be a button on each task that allows it to be removed from the list.

### 4. Styles:
	- Use CSS (or a style library such as styled-components) to style the application and make it visually appealing.
	- Make sure the application is responsive and looks good on different screen sizes.

### 5. Bonus (optional):
	- Implement data persistence using the browser's local storage so that tasks persist even after refreshing the page.
	- Add animations or transitions to enhance the user experience when interacting with the tasks.
	- Backend design required for operation.


# Steps to run the project

### 1. Install dependencies
```bash
npm i -g bun
```
```bash
bun install
```

### 2. Run the project
```bash
bun dev --open
```


# Project structure

### 1. Structure 
	- src
		- components (Atomic Design)
			- Atoms
			- Molecules
			- Organisms
		- hooks
		- pages
		- redux (State management)
			- middlewares
			- slices
			- store
		- router
		- styles
			- globals
			- base dependencies

### 2. Dependencies
	- React Vite + Typescript
	- SASS (CSS Preprocessor)
	- Redux Toolkit (State management)
	- TailwindCSS + Daisy UI (CSS Framework)
	- tabler icons (Icons)
	- uuid (Generate unique id)
	- React Toastify (Notifications)
	- React Hook Form (Form validation)


### 3. Deployment
- Vercel: [Click here](https://todo-list-davichodev.vercel.app) to view it in the browser
