import React, { useState } from 'react'

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
        console.log(inputValue);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
    }

  return (
    <form onSubmit= { (e) => onSubmit(e) }>
        <input 
            type='text' 
            placeholder='Buscar Gifs' 
            value= { inputValue }
            onChange= { onInputChange }
        />
    </form>
  )
}

export default AddCategory
