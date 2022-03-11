import React from "react"
import RecipeItemIcon from "../icons"

const HandlerRecipe = ({recipe, url, scale, setItem, setRecipeType}) => {
  
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
                scale={scale}
                setItem={setItem}
                setRecipeType={setRecipeType}
                />
              )
            })}
            {recipe.outputs.map((output, index) => {
              return (
                <RecipeItemIcon 
                key={`${recipe.id}-${output.id}:${index}`}
                item={output}
                scale={scale}
                setItem={setItem}
                setRecipeType={setRecipeType}
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