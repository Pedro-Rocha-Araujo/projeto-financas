import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./auth.css"

import { toast } from "react-toastify"
import { auth } from "../../firebaseConnection"
import { signInWithEmailAndPassword } from "firebase/auth"

export default function Cadastro() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function logarUsuario(e) {
    e.preventDefault()
    try {
      const response = await signInWithEmailAndPassword(auth, email, senha)
      localStorage.setItem("token", response.user.uid)
      setEmail("")
      setSenha("")
      navigate("/")
    } catch(erro) {
      console.log(erro)
      if(erro.code === "auth/invalid-credential") {
        toast.error("Dado(s) inválido(s)")
        return
      }
      toast.error("Erro no login")
    }
  }

  return (
    <div className="background">

      <div className="auth">

        <div className="header-auth">
          <h1>Login</h1>
        </div>

        <form onSubmit={logarUsuario} className="main-auth">
          <input 
            type="text"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Digite seu E-mail"
          />
          <input 
            type="text"
            required
            value={senha}
            onChange={(e)=>setSenha(e.target.value)}
            placeholder="Digite sua Senha"
          />
          <button>Entrar</button>
        </form>

        <div className="footer-auth">
          <p>Não possui uma conta? <Link to="/auth/cadastro">Fazer cadastro.</Link></p>
        </div>

      </div>

    </div>
  )
}