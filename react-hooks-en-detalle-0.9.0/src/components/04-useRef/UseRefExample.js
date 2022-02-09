import React from 'react';
import { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

const UseRefExample = () => {

  const [show, setShow] = useState(false);

  return (
  <div>
    <h2>useRef</h2>
    <hr />
   { show && <MultipleCustomHooks /> } 
   <button
    className='btn btn-primary mt-4'
    onClick={() => setShow(!show)}
    >
     show toggle
   </button>
  </div>
  )
}

export default UseRefExample;
