import React, {useEffect} from 'react'
import {Box, Button, TextField} from "@material-ui/core"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {SignIn} from "../redux/actions"
import { useHistory } from 'react-router'


function LogIn() {

    const dispatch = useDispatch()

    const history = useHistory();

    const {isLoggedIn} = useSelector(state => state)

    useEffect(() => {
        if(isLoggedIn===true){
            history.push("/Dashboard");
        } 
      }, [isLoggedIn])


    const marginBottom = {
        marginBottom: "30px"
    }

    const UserPassAuth = () => {
        const data = {
            email: document.getElementById("sign_email").value,
            password: document.getElementById("sign_password").value
        }
        dispatch(SignIn(data))
    }

    return (
        <div className="Component">
            <Box className="Box">
                <h1 style={marginBottom}>Log In</h1>
                <div className="Form">
                    <h3>Email</h3>
                    <TextField type="email" variant="outlined" style={marginBottom} id="sign_email" />
                    <h3>Password</h3>
                    <TextField type="password" variant="outlined" style={marginBottom} id="sign_password" />
                    <Button onClick={() => UserPassAuth()} style={marginBottom} variant="contained" color="primary">Log In</Button>
                    <div className="Forgot-pass" style={marginBottom} ><Link to="/forgot-password">Forgot Password?</Link></div>
                </div>
                <div  style={marginBottom} className="Line"></div>
                <h3 className="Link"><Link to="/" className="Link">Need an account? Sign Up</Link></h3>
            </Box>
        </div>
    )
}

export default LogIn
