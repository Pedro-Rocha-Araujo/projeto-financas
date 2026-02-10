import React from "react"

function Tabela(props) {
    return (
        <article className="tabela">
            <table>
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                    <th>Excluir</th>
                </tr>
                {props.lista.map((_,i)=>{
                    return (
                        <tr>
                            <td>{_.descricao}</td>
                            <td>{_.valor}</td>
                            <td>{_.tipo}</td>
                            <td onClick={()=>{ props.onDelete(i) }}><i class="fa-solid fa-trash"></i></td>
                        </tr>
                    )
                })}
            </table>
        </article>
    )
}

export default Tabela