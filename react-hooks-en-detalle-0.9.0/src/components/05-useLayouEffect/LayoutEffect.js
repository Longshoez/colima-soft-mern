import React from 'react';
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCouter';
import './layout.css'
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';


const LayoutEffect = () => {

  const { counter, increment } = useCounter(1)
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  const {quote} = !!data && data[0]
  const [boxSize, setBoxSize] = useState();

  const pTag = useRef();

  //funcinoa de forma similarr al useEffect, solo que este hook se ejecuta despues de que se haya renderiziado el componente
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);
  

  console.log(quote);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />
      <blockquote className='blockquote text-right'>
        <p className="mb-0" ref={pTag}>
          {quote}
        </p>
      </blockquote>

      <pre>
        {JSON.stringify(boxSize, null, 3)}
      </pre>

      <button 
        className="btn btn-primary" 
        onClick={increment}>
          Next
      </button>
    </div>
  )
}

export default LayoutEffect;
