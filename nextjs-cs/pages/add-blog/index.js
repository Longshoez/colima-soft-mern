import AddBlogForm from '../../components/AddBlog/AddBlogForm'
import { Fragment } from 'react'

function AddBlog() {

  //send request to the backend to add a new blog
  const addBlogHandler = async (data) => {
    const response = await fetch("/api/new-blog",{
      method: 'POST', 
      body: JSON.stringify(data),
      headers: {'Content-Type': "application/json"
    }, 
    })
    const respData = await response.json()
    console.log(respData)
  }

  return (
    <Fragment>
      <h1>Add Blog</h1>
      <AddBlogForm addBlogHandler={addBlogHandler} />
    </Fragment>
  )
}

export default AddBlog