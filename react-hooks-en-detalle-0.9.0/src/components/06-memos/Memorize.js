import React from 'react';
import { useState } from 'react';
import useCouter from '../../hooks/useCouter';
import { Small } from './Small';

const Memorize = () => {

  const {counter, increment} = useCouter(10)
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Memoize <Small value={counter}/></h2>
      <hr />

      <button className='btn btn-primary mt-3' onClick={increment}>+10</button>
      <button 
        className='btn btn-outline-primary mt-3'
        onClick={() => setShow(!show)}>Toggle {JSON.stringify(show)}</button>
    </div>
  );
};

export default Memorize;
