import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    const [InputValue, setInputValue] = useState('');

    const onChangeInputValue = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(InputValue.trim().length <= 1) return;
        onNewCategory(InputValue);
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit} >
     <input 
        type="text" 
        placeholder="Buscar Gif"
        value={InputValue}
        onChange={onChangeInputValue}
     ></input>
    </form>
    
  )
}
