import StyledBox from '@components/StyledBox'
import { Button, Tooltip } from '@mui/material'
import RecipeTypeDefaultIcon from '@components/RecipeTypeDefaultIcon'
import RecipeTypeIcon from '@components/RecipeTypeIcon'

const buttonStyle = {
  marginLeft: 10,
  marginRight: 10
}

const HandlerList = ({current, list, handleRecipeTypeChange}) => {
  const position = list.indexOf(current)

  return (
    <div style={{display: 'flex', justifyContent: "space-between", paddingBottom: 10, paddingTop: 10}}>
    {list.map((type, index) => {
      // console.log(type.name)
      if (type === current) {
        return (
          <Tooltip title={type.name} placement="top" key={type.id}>
            <span>
              <Button
              style={buttonStyle}
              variant="outlined" 
              disabled
              key={type.id}
              >
                {type.has_icon ? <RecipeTypeIcon type={type}/> : <RecipeTypeDefaultIcon type={type}/> }
              </Button>
            </span>
          </Tooltip>
        )
      } else {
        if (Math.abs(position - index) <= 5) {
          return (
            <Tooltip title={type.name} placement="top" key={type.id}>
              <Button 
              style={buttonStyle}
              key={type.id}
              variant="outlined" 
              onClick={() => {handleRecipeTypeChange(type)}}
              >
                {type.has_icon ? <RecipeTypeIcon type={type}/> : <RecipeTypeDefaultIcon type={type}/> }
              </Button>
            </Tooltip>
          )
        }
      }
    })}
    </div>
  )
}

const TopBanner = ({selectedRecipeType, recipeTypeList, handleRecipeTypeChange}) => {

  return (
    <div style={{display: 'flex', justifyContent: "center", paddingBottom: 10, paddingTop: 10}}>
      <StyledBox 
        sx={{
          width: "85%",
          height: 50,
          backgroundColor: 'gray',
          display: "flex",
          justifyContent:"center", 
          alignItems: "center"
        }}>
          <HandlerList 
          current={selectedRecipeType}
          handleRecipeTypeChange={handleRecipeTypeChange}
          list={recipeTypeList} 
          />
      </StyledBox>
    </div>
  )
}

export default TopBanner