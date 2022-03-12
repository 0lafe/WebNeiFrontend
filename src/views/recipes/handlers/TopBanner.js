import StyledBox from '@components/StyledBox'

const HandlerList = ({current, list, handleRecipeTypeChange}) => {

  return (
    <div style={{display: 'flex', justifyContent: "space-between", paddingBottom: 10, paddingTop: 10}}>
    {list.map(type => {
      if (type === current) {
        return (
          <span 
          key={type.id}
          style={{color: "red"}}
          >
            {type.name}
          </span>
        )
      } else {
        return (
          <span key={type.name} onClick={() => {handleRecipeTypeChange(type)}}>{type.name}</span>
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