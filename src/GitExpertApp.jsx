import { useState } from 'react'
import { AddCategory } from './components';
import { GifGrid } from './components';
export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        // if(inputValue.trim().length <= 1) return;
        console.log(newCategory);
        if( categories.includes(newCategory) ) return;
         setCategories(cat => [newCategory, ...cat ]);

    }

  return (
    <>
        {/* titulo */}
        <h1>GitExpertApp</h1>
        { /* Input */}
        <AddCategory onNewCategory={ onAddCategory } ></AddCategory>
        {/* <button onClick={onAddCategoty}>Agregar</button> */}
        { /* Listado de  Gif */}
            { categories.map( (category) =>  (
                    <GifGrid category={category} key={category} ></GifGrid>
                )
            ) };
    </>
    
  )
}
