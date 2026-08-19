import { useState } from "react"
import { toast } from "react-toastify"
import "./inputs.css"

import { db } from "../../../firebaseConnection"
import { addDoc, collection } from "firebase/firestore"

function Inputs() {
	const [descricao, setDescricao] = useState("")
	const [valor, setValor] = useState(0)
	const [tipo, setTipo] = useState("entrada")

	async function enviarDados(e) {
		e.preventDefault()
		try {
			const token = localStorage.getItem("token")
			if(!token) {
				return toast.error("Usuário não autorizado")
			}

			if(!descricao.trim() || valor===0 ) {
				return toast.error("Preencha os campos corretamente.")
			}

			const referencia = collection(db, "financas")
			await addDoc(referencia, {
				descricao: descricao,
				valor: Number(valor),
				tipo: tipo,
				id_usuario: token
			})
			
			setDescricao("")
			setValor(0)
			setTipo("entrada")
			toast.success("Adicionado")
		} catch(erro) {
			console.log(erro)
			toast.error("Erro ao cadastrar")
		}
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
						onChange={(e)=>setDescricao(e.target.value)} 
					/>
				</div>
				<div className="campo_input">
					<label className="inputs-maiores">Valor R$ </label>
					<input 
						type="number" required
						name="valor" 
						value={valor} 
						onChange={(e)=>setValor(e.target.value)} 
					/>
				</div>
				<div className="campo_input">
					<label> Entrada </label>
					<input 
						name="tipo" 
						value="entrada" 
						checked={tipo==="entrada"}
						type="radio" required 
						onChange={(e)=>setTipo(e.target.value)}  
					/>
					<label> Saída </label>
					<input 
						name="tipo" 
						className="red"
						value="saida" 
						type="radio" required 
						checked={tipo==="saida"}
						onChange={(e)=>setTipo(e.target.value)}  
					/>
				</div>
				<button type="submit">Salvar</button>

			</form>

		</section>
	)
}

export default Inputs