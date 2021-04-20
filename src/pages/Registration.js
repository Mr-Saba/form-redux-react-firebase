import React, {useEffect} from 'react'
import {Box, Button, TextField} from "@material-ui/core"
import "../App.css"
import {useDispatch} from "react-redux"
import {SignUp} from "../redux/actions"
import {Link} from "react-router-dom"
import { useHistory } from 'react-router'
import { useForm } from "react-hook-form";



function Registration() {
    const marginTop = {
        marginTop: "25px"
    }
    
    const history = useHistory();
    
    const dispatch = useDispatch()

    const { register, handleSubmit, watch, formState: { errors } } = useForm()


    const Register = () => {
            const data = {
                email: document.getElementById("email").value,
                password: document.getElementById("password").value
            }
            if(document.getElementById("password").value === document.getElementById("confirm_password").value) {
                dispatch(SignUp(data))
            } 
        }
        
        const onSubmit = data => console.log(data)

        
    return (
        <div className="Component">
            <Box className="Box">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="Form">
                    <h3 style={marginTop}>Email</h3>
                    <TextField
                    type="email"
                    name="email"
                    {...register("email", { required: true})} 
                    variant="outlined" 
                    
                    id="email" 
                    />
                    {errors.email && <span className="Error">This field is required</span>}
                    <h3 style={marginTop}>Password</h3>
                    <TextField 
                     {...register("password", { required: true, minLength: 8})} 
                     type="password" variant="outlined" id="password" name="password"  />
                     {errors.password && errors.password.type === "required" && <div className="Error">This field is required</div>}
                     {errors.password && errors.password.type === "minLength" && <div className="Error">Use more than 8 digit</div> }   
                    <h3 style={marginTop}> Password Confirmation</h3>
                    <TextField 
                     {...register("password_confirm", {validate: (value) => value === watch('password') })} 
                     type="password" variant="outlined" id="confirm_password"/>
                     {errors.password_confirm && <span className="Error">Passwords do not match</span>}
                    <Button type="submit" onClick={() => Register()} style={marginTop} variant="contained" color="primary">Sign Up</Button>
                </form>
                <div style={marginTop} className="Line"></div>
                <h3 style={marginTop} className="Link"><Link to="/SignIn" className="Link">Already have an account? Sign in</Link></h3>
            </Box>
        </div>
    )
}

export default Registration
