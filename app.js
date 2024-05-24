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
		<div>
			<header>
				Task Manager
			</header>
			<main>
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
 
 
 

 
 /*document.querySelector("html").addEventListener("click", function () {
	alert("Ouch! Stop poking me!");
  })*/

  /*function practiceButton() {
	document.getElementById("demo").innerHTML = "I can't believe this works";
  }*/

  
 
 //document.querySelector('.js-container').innerHTML = 'BITCH ASS NIGGA';

  /*let x = myFunction(4, 3);
  document.getElementById("demo").innerHTML = x;
  
  function myFunction(a, b) {
	if (a === 4 && b === 3) {
  
	
	return "booboo keys";
  } else {
	return "doodoo head";
  }
  }*/



  /*let a = 9
function Stuff () {

    
	if (a > 7) {
  
	
	return "booboo keys";
  } else {
    return "doodoo head";
  }
  }*/


