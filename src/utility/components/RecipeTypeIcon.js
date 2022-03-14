import React from "react"
import { Tooltip } from "@mui/material"

const RecipeTypeIcon = ({ type }) => {
  return (
    <Tooltip title={type.name} placement="top">
        <img 
        src={type.icon_url}
        width={50}
        height={50}/>
    </Tooltip>
  )
}

export default RecipeTypeIcon