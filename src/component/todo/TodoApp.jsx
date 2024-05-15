import './TodoApp.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthProvider, { useAuth } from './security/AuthContext'
import HeaderComponent from './HeaderComponent'
import LoginComponent from './LoginComponent'
// import FooterComponent from './FooterComponent'
import ListTodoComponent from './ListTodoComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './Errorcomponent'

function TodoApp() {



  //route only if the authentication had done
  function AuthenticatedRoute({ children }) {
    console.log(children)
    const usecontext = useAuth();
    if (usecontext.isAuthenticated)
      return children
    return <Navigate to="/" />
  }
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>

            <Route path='/' element={<LoginComponent />} />
            <Route path='/login' element={<LoginComponent />} />


            <Route path='/welcome/:username' element={
              <AuthenticatedRoute>
                <WelcomeComponent />
              </AuthenticatedRoute>
            } />
            <Route path='/todos' element={<ListTodoComponent />} />

            <Route path='/logout' element={<LogoutComponent />} />

            <Route path='*' element={<ErrorComponent />} />

          </Routes>
          {/* <FooterComponent /> */}
        </BrowserRouter>

      </AuthProvider>
    </>
  )
}
export default TodoApp;


