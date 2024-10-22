import { useState } from "react";
import { AddCategory } from "./components/AddCategory";



export const GifExpertApp = () => {
 
    const [categories, setCategories] = useState(["Hola mundo"])

    const onAddCategory = () => {
       setCategories(["Valorant",...categories])
    }
  

  return (
    <>
      {/* Titulo */}
      <h1>Gif App</h1>

      {/* Input */}
      <AddCategory setCategories={setCategories}/>
    

      {/* Listado de Gif */}
      <ol>
        {categories.map((category => {
            return <li key={category}>{category}</li>
        }))}
      </ol>
   
   

      {/* Gif item */}
    </>
  );
};
