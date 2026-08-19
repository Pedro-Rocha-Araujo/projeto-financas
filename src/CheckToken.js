import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function CheckToken({ children }) {
  const navigate = useNavigate()

  useEffect(()=> {
    const token = localStorage.getItem("token")
  
    if(!token) {
      navigate("/auth/login")
    }
  }, [navigate])
  return children
}

export default CheckToken