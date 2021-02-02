import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {

    let [categories, setCategories] = useState(['Naruto']);

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory
                setCategories={setCategories}
            />
            <hr />


            <ol>
                {
                    categories.map((category, i) => {
                        return <GifGrid
                            key={i + '_' + category}
                            category={category}
                        />
                    })
                }
            </ol>
        </>
    );

}

export default GifExpertApp;