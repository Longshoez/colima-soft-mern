import React, { useMemo } from 'react';
import { useState } from 'react';
import { procesoPesado } from '../../helpers';
import useCouter from '../../hooks/useCouter';

const UseMemoHook = () => {

  const {counter, increment} = useCouter(2000)
  const [show, setShow] = useState(false);

  //this prevents the function to be executed on componente re-rendering if the valu is the same
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h3>Memoize hook: <small>{counter}</small></h3>
      <hr />

      <p>{memoProcesoPesado}</p>

      <button className='btn btn-primary mt-3 mr-2' onClick={increment}>+10</button>
      <button 
        className='btn btn-outline-primary mt-3'
        onClick={() => setShow(!show)}>Toggle {JSON.stringify(show)}</button>
    </div>
  );
};

export default UseMemoHook;
