import { useState } from "react"

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState("");


    const inputChangeValue = (e) => {
        setInputValue(e.target.value);  
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
        const newCategoryValue = inputValue.trim();
        if(newCategoryValue.length <= 1){
            return;
        }
        //setCategories(categories => [inputValue, ...categories]);
        onAddCategory(newCategoryValue);
        setInputValue("");
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" value={inputValue} onChange={(e) =>  inputChangeValue(e)}/>
    </form>
    
  )
}

