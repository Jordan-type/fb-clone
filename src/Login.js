import React from 'react'
import Button from '@material-ui/core/Button'
import './Login.css'

function Login() {

  const signIn = () => {
    // sign in
  }

  return (
    <div className='login'>
      <div className='login__logo'>
       <img
       src='https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg'
       alt=''/>
       <img
       src='https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg'
       alt=''/>
      </div>
      <Button type='submit' onClick={signIn}>
      Sign In
      </Button>
    </div>
  );
}

export default Login
