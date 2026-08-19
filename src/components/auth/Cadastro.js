import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./auth.css"

import { auth } from "../../firebaseConnection"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify"

export default function Cadastro() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function cadastrarUsuario(e) {
    e.preventDefault()
    try {
      const response = await createUserWithEmailAndPassword(auth, email, senha)
      localStorage.setItem("token", response.user.uid)
      setEmail("")
      setSenha("")
      navigate("/")
    } catch(erro) {
      console.log(erro)
      if(erro.code === "auth/weak-password") {
        toast.error("Senha muito fraca") 
        return
      }
      if(erro.code === "auth/email-already-in-use") {
        toast.error("Email já cadastrado")
        return
      }
      toast.error("Erro ao cadastrar usuário")
    }
  }

  return (
    <div className="background">

      <div className="auth">

        <div className="header-auth">
          <h1>Cadastro</h1>
        </div>

        <form onSubmit={cadastrarUsuario} className="main-auth">
          <input 
            type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Digite seu E-mail"
          />
          <input 
            type="text"
            value={senha}
            onChange={(e)=>setSenha(e.target.value)}
            placeholder="Digite sua Senha"
          />
          <button>Cadastrar</button>
        </form>

        <div className="footer-auth">
          <p>Já possui uma conta? <Link to="/auth/login">Fazer login.</Link></p>
        </div>

      </div>

    </div>
  )
}