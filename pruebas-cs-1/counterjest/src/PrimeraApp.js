import React from 'react';

const PrimeraApp = ({saludo, subtitulo = "Yo yo yo"}) => {
  return(
    <>
        <h2>{saludo}</h2>
        <h6>{subtitulo}</h6>
    </>
)};

export default PrimeraApp