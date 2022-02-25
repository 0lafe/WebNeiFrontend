import React, { useEffect, useState, Fragment } from "react"
import { useParams } from "react-router-dom"
import { getRecipesInHandler, getRecipeType } from "@api"
import TopBanner from './TopBanner'
import PaginationBar from './PaginationBar'
import HandlerRecipe from './HandlerRecipe'

const Handlers = ({ extra }) => {
    const [recipes, setrecipes] = useState(null)
    const [recipeType, setRecipeType] = useState(null)
    const [offset, setoffset] = useState(0)
    const params = useParams()

    useEffect(() => {
        getRecipesInHandler(params.id).then(reply => {
            setrecipes(reply.data.recipes)
        })
        getRecipeType(params.id).then(reply => {
            setRecipeType(reply.data.recipe_type)
        })
    }, [])

    useEffect(() => {
        getRecipesInHandler(params.id, offset).then(reply => {
            setrecipes(reply.data.recipes)
        })
    }, [offset])

    return (
    !recipes || !recipeType ? null :
    <Fragment>
        <TopBanner recipeType={recipeType}/>
        <PaginationBar count={Math.ceil(recipeType.recipe_quantity/10)} onChange={(value) => setoffset((value - 1) * 10)}/>
        {recipes.map(recipe => {
            return <HandlerRecipe key={recipe.id} recipe={recipe} url={recipeType.gui_url} scale={recipeType.scale}/>
        })}
    </Fragment>
    )
}

export default Handlers