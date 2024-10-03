import { Box, Container } from '@mui/material'
import Img from '../Images/Hero.jpg'
import React from 'react'
import { Field, Form, Formik } from 'formik'
import { Padding } from '@mui/icons-material'

const Signup = () => {
  return (
    <Box>
        <Container>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', borderRadius: '50px',  position: 'relative', top:'100px'}}>
                <Box sx={{width:'50%'}}>
                    {/* <img src={Img} width={"100%"} height={"100%"} sx={{overFlow:'hidden'}} alt="" /> */}
                </Box>
                <Box sx={{width:'50%' ,textAlign:'center'}}>
                    <Formik>
                        <Form style={{color:'#000'}}>
                            Username :- <Field type='text' ></Field><br /><br /> 
                            Email :- <Field type='email' ></Field><br /><br /> 
                            password :- <Field type='email' ></Field><br /><br /> 
                            Contact No :- <Field type='number' ></Field><br /><br />
                            DOB :- <Field type="date"></Field><br /><br />
                            <button type='submit'>submit</button>
                        </Form>
                    </Formik>
                </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default Signup
