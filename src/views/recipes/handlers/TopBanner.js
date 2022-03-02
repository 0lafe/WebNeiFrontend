import StyledBox from '@components/StyledBox'

const TopBanner = ({recipeType}) => {

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
          {recipeType.name}
      </StyledBox>
    </div>
  )
}

export default TopBanner