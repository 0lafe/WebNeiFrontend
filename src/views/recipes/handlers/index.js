import React, { useEffect, useState, Fragment } from "react"
import { useParams } from "react-router-dom"
import { getRecipesByItem, getRecipesInHandler, getRecipeType } from "@api"
import TopBanner from './TopBanner'
import PaginationBar from './PaginationBar'
import HandlerRecipe from './HandlerRecipe'

const Handlers = ({ extra }) => {
    const [recipes, setRecipes] = useState(null)
    const [recipeType, setRecipeType] = useState(null)
    const [recipeTypeList, setRecipeTypeList] = useState(null)
    const [offset, setoffset] = useState(0)

    const params = useParams()

    useEffect(() => {
        switch (extra) {
            case "items":
                console.log("I")
                break
            case "recipes":
                getRecipesInHandler(params.recipe_type_id).then(reply => {
                    setRecipes(reply.data.recipes)
                })
                getRecipeType(params.recipe_type_id).then(reply => {
                    setRecipeType(reply.data.recipe_type)
                })
                break
            case "both":
                getRecipesByItem(params.recipe_type_id, params.item_id).then(reply => {
                    setRecipes(reply.data.recipes)
                })

                break
        }
    }, [])

    useEffect(() => {
        switch (extra) {
            case "items":
                console.log("I")
                break
            case "recipes":
                getRecipesInHandler(params.recipe_type_id, offset).then(reply => {
                    setRecipes(reply.data.recipes)
                })
                break
            case "both":
                break
        }
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