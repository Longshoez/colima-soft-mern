import React, { useCallback } from 'react';
import { useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

const CallbackHooks = () => {

  const [count, setCount] = useState(10);

  /**
   * cada que se renderea este componente la funcion se vuelve a generar
   * con un espacio de memoria  nuevo, por tal motivo usar memo no funcionaria, 
   * puesto a que el componente no es el mismo si la funcion tiene un espacio de memoria diferente
   */

  //old code
  // const increment = () => {
  //   setCount(count +1)
  // }

  //this prevents the function to be declared multiple times (as normaly it would) wheneverr we re-render the component
  const increment = useCallback((num) => { //num es el argumento que se recibe
    setCount(c => c + num) //se elimina la dependencia count de la siguiente forma, como consecuencia 
  }, [setCount]) //

  return (
    <div>
      <h1>useCallback: {count}</h1>
      <hr />
      <ShowIncrement increment={increment}/>
    </div>
  );
};

export default CallbackHooks;