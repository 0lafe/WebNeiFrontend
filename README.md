# WiP

GUIs need to be placed manually into `src/assets/gui/` for now

# Routes

Currently there are a few routes for the front end

`/` at the moment simply lists every recipe handler. However in the future it may direct to a user page, or an item search

`/recipes/recipe_types/:id` will direct to a given recipe handler's recipe list (all recipes in the crafting table for example)

`/recipes/recipe_types/:recipe_type_id/item/:item_id` will show all recipes containing a certain item in a given handler