import { useState } from "react"
import { Link } from "react-router-dom"
import "./auth.css"

import { auth } from "../../firebaseConnection"
import { createUserWithEmailAndPassword } from "firebase/auth"

export default function Cadastro() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function cadastrarUsuario(e) {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, senha)
    } catch(erro) {
      console.log(erro)
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