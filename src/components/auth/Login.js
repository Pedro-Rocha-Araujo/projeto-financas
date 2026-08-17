import { Link } from "react-router-dom"
import "./auth.css"

export default function Cadastro() {
  return (
    <div className="background">

      <div className="auth">

        <div className="header-auth">
          <h1>Login</h1>
        </div>

        <form className="main-auth">
          <input 
            placeholder="Digite seu E-mail"
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