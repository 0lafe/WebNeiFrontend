import React from "react"
import DefaultItemIcon from "@components/DefaultItemIcon"
import { getItemRecipeData } from "@api"
import { useHistory } from "react-router-dom"

const RecipeItemIcon = ({ item, scale, setItem, handleItemChange }) => {
  const history = useHistory()

	const handleClick = (e) => {
		e.preventDefault()
		getItemRecipeData(e.currentTarget.id).then(reply => {
			if (reply.data.item.has_inputs) {
				setItem(reply.data.item.id)
				history.push(`/recipes/recipe_types/${reply.data.item.input_handlers[0].id}/items/${reply.data.item.id}`)
			}
		})
	}

	return (
		<span onClick={handleItemChange} id={item.item.id}>
			{item.item.url
			? null
			: <DefaultItemIcon
			item={item.item} 
			quantity={item.quantity}
			x={item.relx} 
			y={item.rely} 
			scale={scale}
			/>}
		</span>
	)
}

export default RecipeItemIcon