import StyledBox from '@components/StyledBox'
import { Button } from '@mui/material'
import RecipeTypeDefaultIcon from '@components/RecipeTypeDefaultIcon'
import RecipeTypeIcon from '@components/RecipeTypeIcon'

const buttonStyle = {
  marginLeft: 10,
  marginRight: 10
}

const HandlerList = ({current, list, handleRecipeTypeChange}) => {

  return (
    <div style={{display: 'flex', justifyContent: "space-between", paddingBottom: 10, paddingTop: 10}}>
    {list.map(type => {
      if (type === current) {
        return (
          <Button
          style={buttonStyle}
          variant="outlined" 
          disabled
          key={type.id}
          >
            {type.has_icon ? <RecipeTypeIcon type={type}/> : <RecipeTypeDefaultIcon type={type}/> }
          </Button>
        )
      } else {
        return (
          <Button 
          style={buttonStyle}
          key={type.id}
          variant="outlined" 
          onClick={() => {handleRecipeTypeChange(type)}}
          >
            {type.has_icon ? <RecipeTypeIcon type={type}/> : <RecipeTypeDefaultIcon type={type}/> }
          </Button>
        )
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