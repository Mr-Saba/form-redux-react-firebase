import {SIGN_UP_WITH_EMAIL_PASS, SIGN_IN_WITH_EMAIL_PASS, SIGN_OUT, RESET_PASS} from "./constants"
import { auth } from "../firebase/config"

const SignUp = (data) => async dispatch => {
        auth.createUserWithEmailAndPassword(data.email, data.password)
            .then(response => {
                dispatch({
                    type: SIGN_UP_WITH_EMAIL_PASS,
                    payload: response.user
                })
        })
    }
    const SignIn = (data) => async dispatch => {
        auth.signInWithEmailAndPassword(data.email, data.password)
            .then(response => {
                dispatch({
                    type: SIGN_IN_WITH_EMAIL_PASS,
                    payload: response.user
                })
        })
    }
    const LogOut = () => async dispatch => {
        auth.signOut().then(() => {
            dispatch({
                type: SIGN_OUT,
                payload: null,
            })
        })
    }

    const ResetPass = (email) => async dispatch => {
        console.log(email)
        auth.sendPasswordResetEmail(email).then(response => {
            dispatch({
                type: RESET_PASS,
                payload: response.user
            })
          }).catch(error =>
            console.log(error)
          );
    }

    const UpdateCredentials = (data) => async dispatch => {
        const user = auth.currentUser
            await user.updateEmail(data.email).then(()=>{
                console.log("email has changed")
            }).catch((error) => {
                console.log(error)
            }).finally()
            if(data.password === data.confirm_password) {
                await user.updatePassword(data.password).then(()=>{
                    console.log("password has changed")
                }).catch((error) => {
                    console.log(error)
                })
            } else {
                alert("confirm error")
            }
    }




export {SignUp, SignIn, LogOut, ResetPass, UpdateCredentials}
