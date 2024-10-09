import React from 'react'
import { Box } from '@mui/material'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Card = (props) => {
  return (
    <Box sx={{width:'calc(25% - 42px)', margin: '10px', border:'1px solid black', borderRadius:'10px'}}>
      <Box sx={{borderRadius:'10px'}}>
        <img src={props.ImageCard} style={{borderRadius:'10px 10px 0px 0px'}} width={"100%"} height={"300px"} alt="" />
      </Box>
      <Box sx={{fontFamily:'"Anton", sans-serif', marginTop: '5px'}}>
        <p className='paddYaxis'>Title : - {props.HeadingCard}</p>
        <p className='paddYaxis'>product : - {props.product}</p>
        <p className='paddYaxis'>Price : - {props.Price}</p>
        {/* <p className='paddYaxis'>Description : - {props.Description}</p> */}
        <Stack spacing={1} className='paddYaxis'>
          <Rating name="half-rating-read" defaultValue={props.Rating.rate} precision={0.5} readOnly />
        </Stack>
        <p className='paddYaxis'>Count : - {props.Rating.count}</p>
      </Box>
    </Box>
  )
}

export default Card