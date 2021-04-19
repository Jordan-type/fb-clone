import React from 'react'
import Button from '@material-ui/core/Button'
import './Login.css'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './Reducer'

function Login() {
  const [ state, dispatch] = useStateValue()

  const signIn = () => {
    // sign in
    auth.signInWithPopup(provider)  
    .then((result) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      })
      console.log(result.user) 
    })
    .catch((error) => alert(error.message))
  }
  // https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg
  return (
    <div className='login'>
      <div className='login__logo'>
       <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
       alt=''/>
       <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
       alt=''/>
      </div>
      <Button type='submit' onClick={signIn}>
      Sign In
      </Button>
    </div>
  );
}

export default Login
