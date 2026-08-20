import "./listagem.css"
import { toast } from "react-toastify"
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../../../firebaseConnection"

function Tabela({ entradas, saidas }) {
	async function deletarItem(id) {
		try {
			const reference = doc(db, "financas", id)
			await deleteDoc(reference)
			toast.success("Item deletado")
		} catch(erro) {
			console.log(erro)
			toast.error("Erro ao deletar")
		}
	}

	return (
		<section className="tabela">
			<table>
				<thead>
					<tr>
						<th>Descrição</th>
						<th>Valor</th>
						<th>Tipo</th>
						<th>Excluir</th>
					</tr>
				</thead>
				<tbody>
					{ entradas.length > 0 && (
						entradas.map((item)=> {
							return (
								<tr key={item.id}>
									<td data-label="Descrição:">{ item.descricao }</td>
									<td data-label="Valor:">{ item.valor }</td>
									<td data-label="Tipo:">{ item.tipo }</td>
									<td data-label="Excluir:">
										<i onClick={()=>deletarItem(item.id)} className="fa-solid fa-trash"></i>
									</td>
								</tr>
							)
						})
					) }

					{ saidas.length > 0 && (
						saidas.map((item)=> {
							return (
								<tr key={item.id}>
									<td data-label="Descrição:">{ item.descricao }</td>
									<td data-label="Valor:">{ item.valor }</td>
									<td data-label="Tipo:">{ item.tipo }</td>
									<td data-label="Excluir:">
										<i onClick={()=>deletarItem(item.id)} className="fa-solid fa-trash"></i>
									</td>
								</tr>
							)
						})
					) }
				</tbody>
			</table>
		</section>
	)
}

export default Tabela