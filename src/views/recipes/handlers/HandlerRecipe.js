import React from "react"
import RecipeItemIcon from "../icons"

const HandlerRecipe = ({recipe, url, setItem, handleItemChange}) => {
  
  return (
    <div style={{display: 'flex', justifyContent:"center"}}>
      {!url ? 
        <h1>Error no GUI Found</h1>
      :
        <div style={{position: 'relative'}}>
          <img src={require("@src/assets/gui/" + url)} width={1000}/>
            {recipe.inputs.map((input, index) => {
              return (
                <RecipeItemIcon 
                key={`${recipe.id}-${input.id}:${index}`}
                item={input}
                setItem={setItem}
                handleItemChange={handleItemChange}
                />
              )
            })}
            {recipe.outputs.map((output, index) => {
              return (
                <RecipeItemIcon 
                key={`${recipe.id}-${output.id}:${index}`}
                item={output}
                setItem={setItem}
                handleItemChange={handleItemChange}
                />
              )
            })

            }
        </div>
        }
    </div>
  )
}

export default HandlerRecipe