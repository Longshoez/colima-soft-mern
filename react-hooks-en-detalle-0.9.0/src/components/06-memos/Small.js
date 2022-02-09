import React, { memo } from 'react';

/*
memo is used to store snapshot of the component with its currrent values
upn re-render, memo will check  if the values are changed, then it will re-render as usual
the cool thing with memo is that if the values are the same, memo will display the storred snapshot
making the rerendering less heavy on the processing i guess? ,-,

React.memo()
or
memo(
  //all the code aftter the Small = ...
)
*/

export const Small = memo(({ value }) => {
  
  console.log(' called again');

  return (
    <small> {value} </small>
  )
})
