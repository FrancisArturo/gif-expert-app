import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(["dragon ball", "one punch man"])
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            return
        }
        setCategories([ newCategory, ...categories  ]);
    }
  return (
    <>
        <h1>Gif Expert App</h1>
        <AddCategory onAddCategory={onAddCategory}/>
            {
                categories.map( (category) => (
                    <GifGrid category={category} key={category}/>
                ))
            }
    </>
  )
}

export default GifExpertApp