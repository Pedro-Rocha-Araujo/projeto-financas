import { Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import Cadastro from "./auth/Cadastro"
import Login from "./auth/Login"

import CheckToken from "../CheckToken"

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={ <CheckToken> <Home /> </CheckToken> } />
      <Route path="/auth/cadastro" element={ <Cadastro /> } />
      <Route path="/auth/login" element={ <Login /> } />
    </Routes>
  )
}

export default AppRouter