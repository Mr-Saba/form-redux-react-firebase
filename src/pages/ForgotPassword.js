import React from 'react'
import {Box, Button, TextField} from "@material-ui/core"
import {Link} from "react-router-dom"
import { auth } from "../firebase/config"
import {useDispatch} from "react-redux"
import {ResetPass} from "../redux/actions"


function ForgotPassword() {

    const marginBottom = {
        marginBottom: "30px"
    }
    const dispatch = useDispatch()

    const resetPassword = () => {
        const email = document.getElementById("sent_email").value
        dispatch(ResetPass(email))
    }

    return (
        <div className="Component">
            <Box className="Box">
                <h1 style={marginBottom}>Password Reset</h1>
                <div className="Form">
                    <h3>Email</h3>
                    <TextField type="email" variant="outlined" style={marginBottom} id="sent_email" />
                    <Button onClick={() => resetPassword()} style={marginBottom} variant="contained" color="primary">Reset Password</Button>
                    <div className="Forgot-pass" style={marginBottom} ><Link to="/SignIn">Back to Login Page</Link></div>
                </div>
                <div  style={marginBottom} className="Line"></div>
                <h3 className="Link"><Link to="/" className="Link">Need an account? Sign Up</Link></h3>
            </Box>
        </div>
    )
}

export default ForgotPassword
