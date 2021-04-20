import React from 'react'
import {Box, Button, TextField} from "@material-ui/core"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import {LogOut} from "../redux/actions"


function Dashboard() {

    const dispatch = useDispatch()

    const {user} = useSelector(state => state)

    const handleLogOut = () => {
        dispatch(LogOut())
    }


    const marginBottom = {
        marginBottom: "30px",
    }
    const fullWidth = {
        width: "100%"
    }

    return (
        <div className="Component">
            <Box className="Box">
                <div className="Form">
                <h1 style={marginBottom}>Profile</h1>
                <div className="Form">
                    <div className="UserInfo" style={marginBottom}>
                    <h3 style={{fontWeight: "0.8"}}>Email:</h3><h3>{user.email}</h3>
                    </div>
                    <Link className="UserInfo-redirect" to="/Update-profile" ><Button style={marginBottom, fullWidth} variant="contained" color="primary">Update Profile</Button></Link>
                </div>
                <div  style={{marginBottom: "30px", marginTop: "30px"}} className="Line"></div>
                    <Button onClick={() => handleLogOut()} variant="contained" color="primary">Log Out</Button>
                </div>
            </Box>
        </div>
    )
}

export default Dashboard
