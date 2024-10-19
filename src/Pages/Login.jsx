import React from 'react'
import { Field, Form, Formik } from "formik";
import { TextField } from "@mui/material";

const Login = () => {

    return (
        <div className="log-main">
            <div className="log-box">
                <h1 className="log-admin prosto-one">Login</h1>
                <Formik>
                    <Form>
                        <div className="log-form">

                            <TextField type='email' name='email' placeholder='Email'></TextField><br />
                            <TextField type='password' name='password' placeholder='Password'></TextField>
                        </div>
                        <button type='submit' className="log-sub">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>

    )
}

export default Login
