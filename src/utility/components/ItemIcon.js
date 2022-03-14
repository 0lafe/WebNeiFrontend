import { Tooltip } from "@mui/material"
import React from "react"
import "@src/utility/test.css"

const ItemIcon = ({ item, quantity, x, y }) => {
    const name = item.localized_name ? item.localized_name : item.unlocalized_name
    const image = item.icon_url

    return (
        <Tooltip title={name} placement="top">
            <div style={{position: 'absolute', zIndex: 100, top: y, left: x}}>
                <img 
                src={image} 
                width={64}
                height={64}/>
                <span className="mc-font" style={{ fontSize: 40, color: "#1976d2"}}>{quantity > 1 ? quantity : null}</span>
            </div>
        </Tooltip>
    )
}

export default ItemIcon