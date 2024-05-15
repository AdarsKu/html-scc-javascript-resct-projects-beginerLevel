import { useContext } from "react"
import { AuthContext } from "./security/AuthContext"

export default function FooterComponent() {

  const usecontext = useContext(AuthContext)
  console.log("Footer component ", usecontext)
  return (
    <>
      <footer className='footer'>
        <div className="container">
          Footer
        </div>
      </footer>
    </>
  )
}