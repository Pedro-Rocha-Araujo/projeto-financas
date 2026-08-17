import { Link } from "react-router-dom"
import "./auth.css"

export default function Cadastro() {
  return (
    <div className="background">

      <div className="auth">

        <div className="header-auth">
          <h1>Cadastro</h1>
        </div>

        <form className="main-auth">
          <input 
            placeholder="Digite seu E-mail"
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