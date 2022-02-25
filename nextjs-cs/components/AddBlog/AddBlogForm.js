import { useRef } from 'react'

function AddBlogForm(props) {

  const { addBlogHandler } = props

  const titleRef = useRef()
  const imageRef = useRef()
  const descriptionRef = useRef()
  const detailsRef = useRef()

  const formSubmitHandler = (e) => {
    e.preventDefault()
    const formData = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      description: descriptionRef.current.value,
      details: detailsRef.current.value, 
    }
    addBlogHandler(formData)
  }

  return (
    <form action="" className="max-w-lg w-full mx-auto" onSubmit={formSubmitHandler}>
      <div className="flex flex-wrap mx-3 mb-6">
        <label htmlFor="" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Title</label>
        <input ref={titleRef} type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:bg-white" placeholder="Title" />
      </div>
      <div className="flex flex-wrap mx-3 mb-6">
        <label htmlFor="" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Image</label>
        <input ref={imageRef} type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:bg-white" placeholder="Image" />
      </div>
      <div className="flex flex-wrap mx-3 mb-6">
        <label htmlFor="" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Description</label>
        <input ref={descriptionRef} type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:bg-white" placeholder="Description" />
      </div>
      <div className="flex flex-wrap mx-3 mb-6">
        <label htmlFor="" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Details</label>
        <input ref={detailsRef} type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:bg-white" placeholder="Details" />
      </div>
      <div className="text-center">
        <button type='submit' className="px-4 py-2 mb-4 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent" >
          Submit
        </button>
      </div>
    </form>
  )
}

export default AddBlogForm
