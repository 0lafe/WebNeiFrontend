
import { getAllRecipeTypes } from '@api'
import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import RecipeTypeIcon from '@components/RecipeTypeIcon'
import "@src/utility/test.css"
import { Button } from '@mui/material'

const machineHolderStyle = {
  display: "flex",
  alignContent: "space-between",
  flexWrap: "wrap",
  justifyContent: "space-between"
}

const machineStyle = {
  margin: "0.5rem"
}

const Home = () => {
  const [recipes, setRecipes] = useState([])
  const history = useHistory()

  const getData = async () => {
    const response = await getAllRecipeTypes()
    setRecipes(response.data.recipe_types)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleClick = (e) => {
    history.push(`/recipes/recipe_types/${e.currentTarget.id}`)
  }

  const tiles = recipes.map(type => {
      return (
          <Button 
          key={type.id} 
          id={type.id} 
          onClick={handleClick} 
          variant="outlined" 
          style={machineStyle} 
          color={type.recipe_quantity > 0 ? "primary" : "error"}>
              <RecipeTypeIcon type={type} />
              <span className="mc-font">{`${type.name} : ${type.recipe_quantity} recipes`}</span>
          </Button>
      )
  })

  return (
      <div>
          <h1>Web Nei</h1>
          <h2>There are a total of {recipes.length} machines supported!</h2>
          <div style={machineHolderStyle}>
            {tiles}
          </div>
      </div>
  )
}
export default Home
