import React, { useEffect, useState, Fragment } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getAllRecipeTypes, getItemRecipeData, getRecipesByItem, getRecipesInHandler, getRecipeType } from "@api"
import TopBanner from './TopBanner'
import PaginationBar from './PaginationBar'
import HandlerRecipe from './HandlerRecipe'
import NavBar from '@layouts/NavBar'

const Handlers = ({ extra }) => {
	const params = useParams()
  const history = useHistory()
	const [recipes, setRecipes] = useState(null)
	const [recipeType, setRecipeType] = useState(null)
	const [recipeTypeList, setRecipeTypeList] = useState(null)
	const [offset, setoffset] = useState(0)
	const [item, setItem] = useState(extra === "recipes" ? null : params.item_id)
  const [itemName, setItemName] = useState(null)
  
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
        setItemName(reply.data.item.localized_name)
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
    }
  }, [offset])

  const handleItemChange = (event) => {
    event.preventDefault()
		getItemRecipeData(event.currentTarget.id).then(itemReply => {
			if (itemReply.data.item.has_inputs) {
				setItem(itemReply.data.item.id)
        setItemName(itemReply.data.item.localized_name)
        getRecipesByItem(itemReply.data.item.input_handlers[0].id, itemReply.data.item.id).then(recipeReply => {
          setRecipes(recipeReply.data.recipes)
          setRecipeType(itemReply.data.item.input_handlers[0])
          setRecipeTypeList(itemReply.data.item.input_handlers)
        })
				history.push(`/recipes/recipe_types/${itemReply.data.item.input_handlers[0].id}/items/${itemReply.data.item.id}`)
			}
		})
  }

  const handleRecipeTypeChange = (newRecipeType) => {
    setRecipeType(newRecipeType)
    if (extra === "recipes") {
      getRecipesInHandler(newRecipeType.id).then(reply => {
				setRecipes(reply.data.recipes)
			})
      history.push(`/recipes/recipe_types/${newRecipeType.id}`)
    } else {
      getRecipesByItem(newRecipeType.id, params.item_id).then(reply => {
        setRecipes(reply.data.recipes)
      })
      history.push(`/recipes/recipe_types/${newRecipeType.id}/items/${item}`)
    }
  }

  return (
    !recipes || !recipeType || !recipeTypeList ? null :
    <>
    <NavBar recipeType={recipeType} item={itemName}/>
      <TopBanner 
      selectedRecipeType={recipeType} 
      handleRecipeTypeChange={handleRecipeTypeChange}
      recipeTypeList={recipeTypeList}
      />
      <PaginationBar count={Math.ceil(recipeType.recipe_quantity/10)} onChange={(value) => setoffset((value - 1) * 10)}/>
      {recipes.map(recipe => {
        return (
          <HandlerRecipe 
          key={recipe.id} 
          recipe={recipe} 
          url={recipeType.gui_url} 
          setItem={setItem}
          handleItemChange={handleItemChange}
          />
        )
      })}
    </>
  )
}

export default Handlers