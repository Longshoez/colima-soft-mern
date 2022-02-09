import React, { useState } from 'react';
import { AddCategory } from '../AddCategorry/AddCategory';
import { GifGrid } from '../GifGrid/GifGrid';
import '../../index.css'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['mandalorian']);

    // const handleAdd = (value) => {
    //     //Con operador spread
    //     setCategories([...categories, 'new category'])
        
    //     //Con callback
    //     //setCategories(cats => [...cats, 'new cat'])
    //     //this approach messes up with the keys and throws an error in console due to the duplication of the keys
    // }

    return <div>
        <div>
            <h2 className='header'>Gif app 🔥</h2>
            <AddCategory setCategories={setCategories}/>
        </div>
        {categories.map(item => <GifGrid key={item} category={item} />)}
    </div>;
};
