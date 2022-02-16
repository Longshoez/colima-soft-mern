import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    })

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

        handleAddTodo(newTodo)
        reset()
    }

    return (
        <>
            <h4>Agregar to do</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} value={description} className="form-control" type="text" name="description" placeholder='Aprender..' autoComplete='off' />
                <button type="submit" className="btn btn-outline-primary mt-2 btn-block">Agregar</button>
            </form>
        </>
    )
}
