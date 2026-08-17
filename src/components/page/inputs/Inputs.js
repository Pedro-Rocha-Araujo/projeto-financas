import { useState } from "react"
import "./inputs.css"

function Inputs() {
	const [descricao, setDescricao] = useState("")
	const [valor, setValor] = useState(0)
	const [tipo, setTipo] = useState("")

	function enviarDados(e) {
		e.preventDefault()
		
	}
	return (    
		<section className="inputs">

			<form onSubmit={enviarDados}>

				<div className="campo_input">
					<label className="inputs-maiores">Descrição </label>
					<input 
						type="text" required
						name="descricao" 
						value={descricao} 
						onChange={setDescricao} 
					/>
				</div>
				<div className="campo_input">
					<label className="inputs-maiores">Valor R$ </label>
					<input 
						type="number" required
						name="valor" 
						value={valor} 
						onChange={setValor} 
					/>
				</div>
				<div className="campo_input">
					<label> Entrada </label>
					<input 
						name="tipo" 
						value="entrada" 
						checked={tipo==="entrada"}
						type="radio" required 
						onChange={setTipo} 
					/>
					<label> Saída </label>
					<input 
						name="tipo" 
						className="red"
						value="saida" 
						type="radio" required 
						checked={tipo==="saida"}
						onChange={setTipo} 
					/>
				</div>
				<button type="submit">Salvar</button>

			</form>

		</section>
	)
}

export default Inputs