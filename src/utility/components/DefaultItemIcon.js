import { Tooltip } from "@mui/material"
import React from "react"
import SettingsIcon from '@mui/icons-material/Settings';

const DefaultItemIcon = ({ item, quantity, x, y }) => {
    const name = item.localized_name ? item.localized_name : item.unlocalized_name

    return (
        <Tooltip title={name} placement="top">
            <div style={{position: 'absolute', zIndex: 100, top: y, left: x}}>
                <SettingsIcon fontSize="large"/>
                {quantity > 1 ? quantity : null}
            </div>
        </Tooltip>
    )
}

export default DefaultItemIcon