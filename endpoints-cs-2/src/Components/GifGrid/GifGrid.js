import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import GifContainer from '../GifContainer/GifContainer';
import 'animate.css'

export const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs( category )

  return (
      <div>
          <h2 className='searchText'>{category}</h2>
          <p className='searchText animate__animated animate__flash'>{loading && 'Loading'}</p>
          <ol className='gifSearchContainer'>
              {images.map(gif => (
                  <GifContainer title={gif.title} url={gif.url} key={gif.id}/>
              ))}
          </ol>
      </div>
  );
};


//api key="YhX0MRx9ZIadjHw9UFbzD662kMpNnAVQ"