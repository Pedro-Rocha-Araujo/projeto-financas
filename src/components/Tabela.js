
function Tabela(props) {
	return (
		<article className="tabela">
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
					{props.lista.map((_,i)=>{
						return (
							<tr>
								<td data-label="Descrição:">{_.descricao}</td>
								<td data-label="Valor:">{_.valor}</td>
								<td data-label="Tipo:">{_.tipo}</td>
								<td data-label="Excluir:" onClick={()=>{ props.onDelete(i) }}>
									<i class="fa-solid fa-trash"></i>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</article>
	)
}

export default Tabela