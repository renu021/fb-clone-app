import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import {auth, provider} from '../firebase'
import { useDispatch } from 'react-redux';
import { changeUser } from '../redux/reducer'




export default function Login() {
const dispatch = useDispatch()
const handleLogin = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    dispatch(changeUser(result._tokenResponse))
  })
  .catch((error) => console.log(error.message))
}

  return (
    <div className="text-center p-5" >
      <div>
        <img src="https://www.pagetraffic.com/blog/wp-content/uploads/2022/07/facebook-welcome-message-1024x768.png" 
        alt="fb-logo"
        width={400} 
        height={400}
        className={"pr-2 br-10"}
        />
      </div>

      <div>
        <button className="btn btn-primary mt-5" onClick={handleLogin}>
                Login
        </button>
      </div>
    </div>
  )
}

