import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./security/AuthContext"

export default
  function LoginComponent() {

  /// authentication 
  const authentication = useAuth();
  // console.log(authentication.isAuthenticated)

  const [username, setUsrname] = useState('Adarsh')
  const [password, setPassword] = useState('adarsh@123')
  const [isFailed, funFailed] = useState(false)
  const navigate = useNavigate();

  function HandleChangeInUsername(event) {
    setUsrname(event.target.value)
  }
  function HandleChangeInPassword(event) {
    setPassword(event.target.value)
  }

  function CheckCredential() {
    if (authentication.login(username, password)) {
      navigate(`/welcome/${username}`)
    } else {
      funFailed(true);
    }
  }

  return (
    <>
      <div className="container">
        <h2 className="todo-app">Please Login first</h2>
        {isFailed && <div className="show-error-msg">Login Failed</div>}
        <div className="login">
          <div className="login-form">
            <div>
              <label name="name">User Name</label>
              <input type="text" name="name" value={username} onChange={HandleChangeInUsername} />
            </div>
            <div>
              <label name="password" >Password</label>
              <input type="password" name="password" value={password} onChange={HandleChangeInPassword} />
            </div>
            <div className='button'>
              <button type='button' name="login" onClick={
                CheckCredential}>Login</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

