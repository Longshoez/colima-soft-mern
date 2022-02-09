import React from 'react';

export const ShowIncrement = React.memo(({increment}) => {

  console.log('rendered again ;C');

  return (
    <button 
      className='btn btn-primary' 
      onClick={() => {increment(5)}}>
        Incrermentar
    </button>
  )
})