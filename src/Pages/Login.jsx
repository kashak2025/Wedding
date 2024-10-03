import { Box, Container } from '@mui/material'
import Img from '../Images/Hero.jpg'
import React from 'react'

const Login = () => {
  return (
    <Box>
        <Container>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', borderRadius: '50px', backgroundColor: '#e65e5a', position: 'relative', top:'100px'}}>
                <Box sx={{width:'50%'}}>
                    {/* imgage */}
                    <img src={Img} width={"100%"} height={"100%"} sx={{overFlow:'hidden'}} alt="" />
                </Box>
                <Box sx={{width:'50%'}}>
                    Content {/*form
                            email
                            pass /// if user is connected with mobile
                         */}
                    {/* Signup form
                            user name
                            contact
                            --> otp in contact
                            email
                            --> otp in Email
                            pass /// if user is connected with mobile
                            Confirm pass /// if user is connected with mobile
                         */}
                </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default Login
