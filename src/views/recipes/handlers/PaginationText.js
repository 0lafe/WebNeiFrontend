import React from "react"

const PaginationText = (props) => {
    const { onClick, ref } = props
    console.log(props)
    return (
        <button onClick={onClick} ref={ref}>H</button>
    )
}

export default PaginationText