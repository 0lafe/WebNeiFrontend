import { Tooltip } from "@mui/material"
import React from "react"

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
                <span style={{fontSize: 40}}>{quantity > 1 ? quantity : null}</span>
            </div>
        </Tooltip>
    )
}

export default ItemIcon