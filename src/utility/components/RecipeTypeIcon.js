import React from "react"

const RecipeTypeIcon = ({ type }) => {
  return (
    <img 
    src={type.icon_url}
    width={50}
    height={50}/>
  )
}

export default RecipeTypeIcon