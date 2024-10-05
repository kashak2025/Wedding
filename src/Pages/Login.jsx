import { Box, Container, TextField } from '@mui/material'
import React from 'react'
import { Field, Form, Formik } from 'formik'
import { Padding, TextFields } from '@mui/icons-material'


const Signup = () => {
  return (
    <Box>
        <Container>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid black', borderRadius:'10px',  position: 'relative', top:'100px'}}>
                <Box sx={{width:'100%' ,textAlign:'center', py:'90px', borderRadius:'10px',backgroundImage:"url('https://i.pinimg.com/564x/4c/a7/e3/4ca7e3e9f3e02ea0b1397d563d601ff8.jpg')", backgroundSize:'cover', backgroundAttachment:'fixed',}}>
                <Box sx={{ display: 'flex', justifyContent: 'center', fontSize: { lg: 45, md: 40, sm: 35, xs: 30 }, textTransform: 'uppercase', color: '#d4c6b9', fontFamily:'"Prosto One", system-ui', margin: { lg: '36px 0px 21px 0px', md: '  10px', sm: 'auto', } }} >
                    Sign in
                </Box>
                    <Formik>
                        <Form style={{width:'100%',color:'#000', ontWeight:'600px', fontFamily:'"Prosto One", system-ui', fontSize:'24px'}}>
                            <Field as={TextField} type='text' placeholder='Username' style={{color:'red !important'}}></Field><br /><br /> 
                            <Field as={TextField} type='email'  placeholder="Email"></Field><br /><br /> 
                            <Field as={TextField} type='password'  placeholder="Password"></Field><br /><br /> 
                            <button type='submit' className="log-sub">Submit</button>
                        </Form>
                    </Formik>
                </Box>
            </Box>
        </Container>
               
    </Box>
  )
}

export default Signup
