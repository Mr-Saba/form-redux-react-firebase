import {Box, Button, TextField} from "@material-ui/core"
import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux"
import { UpdateCredentials } from '../redux/actions'
import { useForm } from "react-hook-form";


function UpdateProfile() {

    const marginBottom = {
        marginBottom: "30px"
    }

    // const { register, handleSubmit, errors } = useForm()


    const dispatch = useDispatch()
    // const {user} = useSelector(state => state)

    useEffect(() => {
        
    }, [])

    const changeCredentials = async () => {
        const data = {
            email: document.getElementById("update_email").value,
            password: document.getElementById("update_password").value,
            confirm_password: document.getElementById("update_confirm_password").value
        }
        dispatch(UpdateCredentials(data))
        document.getElementById("update_email").value = null
        document.getElementById("update_password").value = null
        document.getElementById("update_confirm_password").value = null
    }



    return (
        <div className="Component">
            <Box className="Box">
                <h1 style={marginBottom}>Update Profile</h1>
                <div className="Form">
                    <h3>Email</h3>
                    <TextField 
                    placeholder="Leave blank to keep the same" type="email" variant="outlined" style={marginBottom} id="update_email" />
                    <h3>Password</h3>
                    <TextField placeholder="Leave blank to keep the same" type="password" variant="outlined" style={marginBottom} id="update_password"/>
                    <h3>Password Confirmation</h3>
                    <TextField placeholder="Leave blank to keep the same" type="password" variant="outlined" style={marginBottom} id="update_confirm_password"/>
                    <Button onClick={() => changeCredentials()} 
                    style={marginBottom}
                    variant="contained" color="primary">Update</Button>
                </div>
                <div  style={marginBottom} className="Line"></div>
                <h3 className="Link"><Link to="/Dashboard" className="Link">Cancel</Link></h3>
            </Box>
        </div>
    )
}

export default UpdateProfile
