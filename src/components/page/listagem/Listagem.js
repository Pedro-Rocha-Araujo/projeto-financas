import "./listagem.css"

function Tabela() {
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
					<tr>
						<td data-label="Descrição:">_.descricao</td>
						<td data-label="Valor:">_.valor</td>
						<td data-label="Tipo:">_.tipo</td>
						<td data-label="Excluir:">
							<i className="fa-solid fa-trash"></i>
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}

export default Tabela