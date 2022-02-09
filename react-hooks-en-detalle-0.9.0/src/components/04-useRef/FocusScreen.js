import React, { useRef } from 'react'

const FocusScreen = () => {

  //references an object in the dcument
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select()
    console.log(inputRef);
  }
  

  return (
  <div>
    <h2>Focus Screen</h2>
    <hr />
    <input 
      ref={ inputRef }
      placeholder='Nombre' 
      className="form-control" 
    />
    <button 
      className="btn btn-outline-primary mt-4"
      onClick={ handleClick}
    >focus</button>
  </div>
 )
}

export default FocusScreen;
