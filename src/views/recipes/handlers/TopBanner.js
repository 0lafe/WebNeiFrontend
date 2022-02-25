import StyledBox from '@components/StyledBox'
import { Pagination, PaginationItem } from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PaginationText from './PaginationText';

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