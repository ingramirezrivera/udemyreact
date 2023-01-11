import React, { useState } from 'react'

const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
        console.log(inputValue);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        //? Previene que si no hay entrada no se sume al array
        if(inputValue.trim() <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
        
        
    }

  return (
    <form onSubmit= { onSubmit }>
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
