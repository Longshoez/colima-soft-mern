import React, { useEffect, useReducer } from 'react';
import './styles.css'
import todoReducer from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

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
    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])


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
        
    const handleAddTodo = (newTodo) => {
        dispatch({
                type: 'add',
                payload: newTodo,
        })
    }

    return (
        <>
            <h2>To Do's: ( {todos.length} )</h2>
            <hr />
            <div className="row">

                <div className="col-7">
                    <TodoList todos={todos} handleDelete= {handleDelete} handleToggle={handleToggle}/>

                </div>

                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>

            </div>
        </>
    );
};

export default TodoApp;
