import React from 'react';
import '../../effects.css';
import useFetch from '../../hooks/useFetch';
import 'animate.css';
import useCounter from '../../hooks/useCouter';

const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1)

  //every time we push the button the url will get updated using the counter variable and the useEffect functiono in the hook where everytime the url changes it updates
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  //console.log(state); 
  //                      !!null -> turns the null into false, which is what we need, alternatively !null returns true
  const {author, quote} = !!data && data[0]

  console.log(author, quote);

  return (
  <div>
    <h1>BrBa quotes!</h1>
    <hr />
    {loading ? (
        <div className='alert alert-info text-center animate__animated animate__flash animate__infinite'>
          Loading
        </div>
      ) : (
        <blockquote className='blockquote text-right'>
          <p className="mb-0">
            {quote}
          </p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
    )}
    <button className="btn btn-primary" onClick={increment} >Next</button>
    </div>
  )
}

export default MultipleCustomHooks;
