import React, { useState } from 'react'
import AddCategory from './components/AddCategory';

const apiKey = 'RRhOx0Ip9jtWePR9odZRUOQ81mOzCOZd'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  return (
    <>
        {/* Titulo */}
        <h1>Gift Expert App</h1>

        {/* Input */}

        {/* Listado de Gifs */}
        <ol>
            { categories.map( (category, index) => {
                return <li key={index}>{ category }</li>
            }) }
        </ol>
            {/* Gif Item */}
            <AddCategory />

    </>
  )
}

export default GifExpertApp
