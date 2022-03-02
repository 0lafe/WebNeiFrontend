import { lazy } from 'react'

const RecipesRoutes = [
  {
    path: '/recipes/recipe_types/:recipe_type_id',
    className: 'recipes',
    exact: true,
    component: lazy(() => import('../../views/recipes/handlers')),
    extra: "recipes"
  },
  {
    path: '/recipes/items/:item_id',
    className: 'items',
    exact: true,
    component: lazy(() => import('../../views/recipes/handlers')),
    extra: "items"
  },
  {
    path: '/recipes/recipe_types/:recipe_type_id/items/:item_id',
    className: 'items',
    exact: true,
    component: lazy(() => import('../../views/recipes/handlers')),
    extra: "both"
  }
]

export default RecipesRoutes
