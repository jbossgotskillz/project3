import React from 'react';
import Home from './components/home';
import Todo from './components/todo'
import TodoForm from'./components/todo-form';
import TodoWrapper from './components/todo-wrapper';
import EditTodoForm from './components/edit-todo-form';
import Contact from './components/contact';
import './app.css';

//go back to https://www.youtube.com/watch?v=LoYbN6qoQHA if necessary

function App() {

	return(
		<div className="App">
			<header className="App-header">
				Task Manager
			</header>
			<main className="task-container">
				<Home />
				<Todo />
				<TodoForm />
				<TodoWrapper />
				<EditTodoForm />
				<Contact />
			</main>
		</div>
	
	)
}

export default function App()
 
 
 

 
 