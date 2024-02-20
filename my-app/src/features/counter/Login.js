import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loginAsync, selectlogged } from './loginSlice'
const Login = () => {
    const logged = useSelector(selectlogged);
    const dispatch = useDispatch();
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    return (
        <div>Login
            <hr></hr>
            {logged ?
                <button onClick={() => dispatch(loginAsync({ username, password }))}>Logout</button> :
                <div> user name:<input onChange={(e) => setusername(e.target.value)}></input>
                    pwd: <input onChange={(e) => setpassword(e.target.value)}></input>
                    <button onClick={() => dispatch(loginAsync({ username, password }))}>Login</button></div>}
            <br></br>

        </div>
    )
}

export default Login