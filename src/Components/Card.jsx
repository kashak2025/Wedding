import { Box } from '@mui/material'
import React from 'react'

const Card = (props) => {
  return (
    <Box>
        <Box sx={{border:'1px solid black', width:'20%', padding:'20px', textAlign:'center', margin:'10px 0px 0px 0px ' ,borderRadius:'10px'}}>
            <Box><img src={props.ImageCard} alt="" width={"200px"} /></Box>
            <Box sx={{fontFamily:'"Prosto One", system-ui'}}><b>Title :</b>-{props.HeadingCard}</Box>
            <Box sx={{fontFamily:'"Prosto One", system-ui'}}><b>Price:</b>-{props.priceCard}</Box>
        </Box>
    </Box>
  )
}

export default Card