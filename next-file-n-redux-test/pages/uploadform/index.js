import React from 'react'
import { useState } from 'react'

const uploadForm = () => {

  const [image, setImage] = useState(null)
  const [createObjectURL, setCreateObjectURL] = useState(null)

  const uploadToClient = (e) => {
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0]

      setImage(i)
      setCreateObjectURL(URL.createObjectURL(i))
    }
  }

  const uploadToServer = async (e) => {
    const body = new FormData()
    body.append("file", image)
    const response = await fetch('/api/upload', { method: "POST", body })
  }

  const uploadPicture = () => {
    uploadToClient()
    uploadToServer()
  }


  return (
    <div>
      <div>
        <img src={createObjectURL} />
        <h4>select image</h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
        <button className='btn btn-primary' type='submit' onClick={uploadToServer}>
          Update
        </button>
      </div>
    </div>
  )
}

export default uploadForm
