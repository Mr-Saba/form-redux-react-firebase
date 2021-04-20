import React, {useEffect} from 'react'
import Registration from "./pages/Registration"
import LogIn from "./pages/LogIn"
import "./App.css"
import { Route, Switch, useHistory } from 'react-router'
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./ProtectedRoute"
import ForgotPassword from "./pages/ForgotPassword"
import UpdateProfile from "./pages/UpdateProfile"
import {auth} from "./firebase/config"


function App() {

  const history = useHistory()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
        if(user) {
            console.log("signed in")
            history.push("/Dashboard")
        }else{
          console.log("not signed in")
        }
    })
}, [])
 
  return (
    <Switch>
      <Route path="/" exact component={Registration}></Route>
      <Route path="/SignIn" component={LogIn} exact></Route>
      <ProtectedRoute path="/Dashboard" exact component={Dashboard}></ProtectedRoute>
      <Route path="/Forgot-password" component={ForgotPassword} exact></Route>
      <ProtectedRoute path="/Update-profile" exact component={UpdateProfile}></ProtectedRoute>
    </Switch>
  )
}

export default App

