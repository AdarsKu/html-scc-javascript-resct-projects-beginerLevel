import { createContext, useContext, useState } from "react";

// 1 Create context
export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext);

//2 share the context to other components
export default function AuthProvider({ children }) {
  //3 put some state in it
  const [isAuthenticated, setAuthentication] = useState(false)

  //login
  function login(username, password) {
    if (username === 'Adarsh' && password === 'adarsh@123') {
      setAuthentication(true)
      return true
    } else {
      setAuthentication(false)
    }
  }

  // logout
  function logout() {
    setAuthentication(false)
  }
  const valueToBeShared =
    { isAuthenticated, login, logout }


  /// sending all function to the child
  return (
    <AuthContext.Provider value={valueToBeShared}>
      {children}
    </AuthContext.Provider>
  )
}