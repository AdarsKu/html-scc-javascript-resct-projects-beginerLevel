import { Link } from 'react-router-dom'
import { useAuth } from './security/AuthContext'

export default function HeaderComponent() {

  const authcontext = useAuth();
  //console.log("Header component ", authcontext.number)
  console.log(authcontext.isAuthenticated)

  function logout() {
    authcontext.logout();
  }

  return (<>

    <header className='header'>
      <div className="nav-container">

        <ul className='navbar'>

          <li> <a className='logo' href="http://fullstack.com">FullStack</a></li>

          {authcontext.isAuthenticated &&
            <><li ><Link to="/welcome/*">Welcome</Link></li>

              <li> <Link to="/todos">Todos</Link></li>

              <li><Link to="/logout" onClick={logout}>Logout</Link></li></>}

          <li >{!authcontext.isAuthenticated && <Link to="/login">Login</Link>}</li>
        </ul>

      </div>
    </header>
  </>)
}