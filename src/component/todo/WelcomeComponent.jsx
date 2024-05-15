import { useParams, Link } from "react-router-dom"
import axios from 'axios'
import { useState } from "react"

export default
  function WelcomeComponent() {
  const { username } = useParams()
  const [msg, setMsg] = useState(null);

  function CallSayHelloRestApi() {
    console.log("Rest api called")
    // use of axios to call rest api
    axios.get("http://localhost:8080/say-hello")
      .then((success) => (setMsg(success.data)))
      .catch((error) => (console.log(error)))
      .finally(() => console.log('cleanup'));
  }



  return (
    <>


      <div className="welcome-comp">
        <h1>Welcome in the world of React {username}</h1>
        <div>Manage Your Todos <Link to='/todos'>Go Here</Link></div>

        <div>
          <button className="btn btn-success m-5" onClick={CallSayHelloRestApi}>
            Call say-hello REST API
          </button>
        </div>

      </div>c

      <div style={{ fontSize: "20px" }}>{msg}</div>

    </>
  )
}



