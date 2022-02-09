import React, { useReducer } from 'react';
import './styles.css'

const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Learn something',
    done: false,
  }
]

const TodoApp = () => {

  const [ state ] = useReducer(reducer, initialState);

  return (
    <>
      <h2>To Do's</h2>
      <hr />
      <ul>
        <li>y</li>
        <li>e</li>
        <li>a</li>
        <li>h</li>
      </ul>
    </>
  );
};

export default TodoApp;
