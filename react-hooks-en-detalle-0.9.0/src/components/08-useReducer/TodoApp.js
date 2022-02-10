import React, { useEffect, useReducer } from 'react';
import './styles.css'
import todoReducer from './todoReducer';
import { useForm } from '../../hooks/useForm'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []

    /**
    return [{
        id: new Date().getTime(),
        desc: 'Learn something',
        done: false,
    }]
     */
}

const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    })

    useEffect(() => {
      
        localStorage.setItem('todos', JSON.stringify( todos ))

    }, [todos])
    

    const handleSubmit = (e) => {
        e.preventDefault()

        //description == empty? exits the block of code (interesting input validation)
        if (description.trim().length <= 1) {
            return
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,

        }

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch(action)
        reset()
    }

    const handleDelete = (todoId) => {
        console.log(todoId)
        //crear accion
        const action = {
            type: 'delete',
            payload: todoId
            
        }
        //dispatch
        dispatch(action)

    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    console.log(description)

    return (
        <>
            <h2>To Do's: ( {todos.length} )</h2>
            <hr />
            <div className="row">
                <div className="col-7">
                    {/**<TodoList(todos, handleDelete, handleToggle) /> */}
                        {/**<TodoListItem(todo, i, handleDelete, handleToggle) /> */}
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className="list-group-item" >
                                    <p className={`${todo.done && 'complete'}`} onClick={() => handleToggle(todo.id)}> {i + 1}. {todo.desc} </p>
                                    <button onClick={() => handleDelete(todo.id)} className='btn btn-danger'>Borrar</button>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                <div className="col-5">
                    <h4>Agregar to do</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input onChange={handleInputChange} value={description} className="form-control" type="text" name="description" placeholder='Aprender..' autoComplete='off' />
                        <button type="submit" className="btn btn-outline-primary mt-2 btn-block">Agregar</button>
                    </form>
                </div>

            </div>
        </>
    );
};

export default TodoApp;
