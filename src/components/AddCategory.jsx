import { useState } from "react"
import PropTypes from "prop-types"


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
    <form onSubmit={handleSubmit} aria-label="form">
        <input type="text" placeholder="Search" value={inputValue} onChange={(e) =>  inputChangeValue(e)}/>
    </form>
    
  )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired,
}