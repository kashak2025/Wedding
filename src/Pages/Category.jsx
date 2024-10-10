import { Box, Container } from '@mui/material'
import React from 'react'
import women from '../Images/women.jpg'
import men from '../Images/men.jpg'
import kids from '../Images/kids.jpg'

function Category() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center',  fontSize: { lg: 45, md: 40, sm: 35, xs: 30 }, textTransform: 'uppercase', fontFamily:'"Prosto One", system-ui', color: '#dd1a18', my: { lg: '25px', md: '10px', sm: 'auto', } }} >categories</Box>

            <Container>
                <Box sx={{display:'flex', flexWrap:'wrap',marginTop: { lg: '30px', md: '10px', sm: 'auto'}}}>
                    <Box sx={{width:'calc(33.33% - 20px)', px:'10px',marginTop:{ sm:'10px', xs: '5px'}}}>
                        <img src={women} alt="" width={'100%'} />
                    </Box>
                    <Box sx={{width:'calc(33.33% - 20px)', px:'10px',marginTop:{ sm:'10px', xs: '5px'}}}>
                        <img src={men} alt="" width={'100%'} />
                    </Box>
                    <Box sx={{width:'calc(33.33% - 20px)', px:'10px',marginTop:{md:'10px', sm:'10px', xs: '5px'}}}>
                        <img src={kids} alt="" width={'100%'} />
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Category