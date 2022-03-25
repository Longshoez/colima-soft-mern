import './App.css';
import { useMutation, useQuery} from '@apollo/client'
import { getAll } from './GraphQl/Query';
import { CREATE_POST, DELETE_POST } from './GraphQl/Mutation';
import { useState } from 'react';
import { Task } from './Task';

function App() {
  const {loading, error, data} = useQuery(getAll)

  const [inputTitle, setTitle] = useState('')
  const [inputDescription, setDescription] = useState('')


  //here we asign an identifier for the mutation function, instead of using CREATE_POST we use createPost, but we have the logic from CREATE_POST
  const [createPost, {err}] = useMutation(CREATE_POST)
  const [deletePost, {errr}] = useMutation(DELETE_POST)

  if (loading) return 'Loading'
  if (error)return 'Error'  
  if (data) {
    console.log(data)
  }

  const addPost = () => {
    createPost({
      variables:{
        title: inputTitle,
        description: inputDescription
      }
    })
  }

  const removePost = (id) => {
    deletePost({
      variables:{
        id: id,
      }
    })
  }

  return (  
    <div className="App">      
      {
        data.getAll.map((data, index) => (          
          <Task index={index} title={data.title} description={data.description} func={() => removePost(data.id)}/>
        ))
      }              
      <div className='nav'>
        <div>
          <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="New task"/>
          <textarea type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Task description"/>
        </div>
        <button onClick={() => addPost()}>Add post</button>
      </div>  
  </div>
  );
}

export default App;
