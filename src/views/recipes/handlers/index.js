import React, { useEffect, useState, Fragment } from "react"
import { useParams } from "react-router-dom"
import { getAllRecipeTypes, getItemRecipeData, getRecipesByItem, getRecipesInHandler, getRecipeType } from "@api"
import TopBanner from './TopBanner'
import PaginationBar from './PaginationBar'
import HandlerRecipe from './HandlerRecipe'

const Handlers = ({ extra }) => {
	const params = useParams()
	const [recipes, setRecipes] = useState(null)
	const [recipeType, setRecipeType] = useState(null)
	const [recipeTypeList, setRecipeTypeList] = useState(null)
	const [offset, setoffset] = useState(0)
	const [item, setItem] = useState(extra === "recipes" ? null : params.item_id)
  
	useEffect(() => {
		if (extra === "recipes") {
			getRecipesInHandler(params.recipe_type_id).then(reply => {
				setRecipes(reply.data.recipes)
			})
			getRecipeType(params.recipe_type_id).then(reply => {
				setRecipeType(reply.data.recipe_type)
			})
			getAllRecipeTypes().then(reply => {
				setRecipeTypeList(reply.data.recipe_types)
			})
		} else {
      getRecipesByItem(params.recipe_type_id, params.item_id).then(reply => {
        setRecipes(reply.data.recipes)
      })
      getItemRecipeData(item).then(reply => {
        reply.data.item.input_handlers.forEach(handler => {
          if (handler.id == params.recipe_type_id) {
            setRecipeType(handler)
          }
        })
        setRecipeTypeList(reply.data.item.input_handlers)
      })
  }}, [])

  useEffect(() => {
    if (extra === "recipes") {
      getRecipesInHandler(params.recipe_type_id, offset).then(reply => {
        setRecipes(reply.data.recipes)
      })
    } else {
      getRecipesByItem(params.recipe_type_id, params.item_id, offset).then(reply => {
        setRecipes(reply.data.recipes)
      })
  }}, [offset])

  return (
    !recipes || !recipeType ? null :
    <Fragment>
      <TopBanner recipeType={recipeType} recipeTypeList={recipeTypeList}/>
      <PaginationBar count={Math.ceil(recipeType.recipe_quantity/10)} onChange={(value) => setoffset((value - 1) * 10)}/>
      {recipes.map(recipe => {
        return (
          <HandlerRecipe 
          key={recipe.id} 
          recipe={recipe} 
          url={recipeType.gui_url} 
          scale={recipeType.scale}
          setItem={setItem}
          setRecipeType={setRecipeType}
          />
        )
      })}
    </Fragment>
  )
}

export default Handlers