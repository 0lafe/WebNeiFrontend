import React from "react"
import DefaultItemIcon from "@components/DefaultItemIcon"
import ItemIcon from "@components/ItemIcon"

const styles = {
	width: "16",
	height: "16"
}

const scale = 3.95
const xPlus = 20
const yPlus = 45

const RecipeItemIcon = ({ item, handleItemChange }) => {

	return (
		<span onClick={handleItemChange} id={item.item.id}>
			{item.item.has_icon
			? <ItemIcon
			item={item.item} 
			quantity={item.quantity}
			x={item.relx * scale + xPlus} 
			y={item.rely * scale + yPlus} 
			/>
			: <DefaultItemIcon
			item={item.item} 
			quantity={item.quantity}
			x={item.relx * scale + xPlus} 
			y={item.rely * scale + yPlus} 
			/>}
		</span>
	)
}

export default RecipeItemIcon