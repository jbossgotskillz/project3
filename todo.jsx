import React from 'react';
import {FontAwesomeIcon} from '@fontawesome/react-fontawesome/';
import {faPenToSquare} from '@fontawesome/free-solid-svg-icons';
import {faTrash} from '@fontawesome/free-solid-svg-icons';

export default function Todo ({task, toggleComplete, deleteTodo, editTodo}) {
  return (
    <div className="todo">
        <p>Kill the cave monster</p>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon = {faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon = {faTrash} onClick={() => deleteTodo(task.id)} />
            </div>

    </div>
  )
}

/*install Font Awesome library

            <p>O - faPenToSquare</p>
            <p>X - faTrash</p>*/